import Quote, { IQuoteModel } from "../models/Quote";
import mongoose from "mongoose";

export default class QuoteRepository {
	async saveQuote(quote: IQuoteModel) {
		return await quote.save();
	}

	async updateQuote(quoteId: string, quote: IQuoteModel) {
		return Quote.findByIdAndUpdate(quoteId, {
			author: quote.author,
			body: quote.body,
		});
	}

	async deleteQuote(quoteId: string) {
		return Quote.findByIdAndDelete(quoteId);
	}

	async findQuoteById(quoteId: string) {
		return Quote.findById(quoteId);
	}

	async getRandomQuote() {
		const count = await Quote.count();
		const random = Math.floor(Math.random() * count);
		return Quote.findOne().skip(random);
	}

	async getAllQuotes() {
		return Quote.find();
	}
}
