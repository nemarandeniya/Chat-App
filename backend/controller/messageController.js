import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id
        console.log("Sender:", req.user);
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save()
        // await newMessage.save()
        //instead doing like above do like below 
        await Promise.all([conversation.save(), newMessage.save()])//this will run in parallel

        res.status(201).json(newMessage)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server error" })
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages")//populate("messages") replaces the message IDs with the actual message documents

        if (!conversation) {
            return res.status(200).json([]); // no conversation = no messages
        }
        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server error" })
    }
}