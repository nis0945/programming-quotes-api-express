import { Router } from "express";
import QuoteController from "../controllers/Quote.controller";

const router = Router();

router.post("/create", QuoteController.createQuote);
router.get("/find/:quoteId", QuoteController.readQuote);
router.get("/all", QuoteController.readAll);
router.get("/random", QuoteController.randomQuote);
router.get("/random/:count", QuoteController.randomQuotes);
router.patch("/update/:quoteId", QuoteController.updateQuote);
router.delete("/delete/:quoteId", QuoteController.deleteQuote);
// router.put("/put", QuoteController.backupLocal);

export default router;
