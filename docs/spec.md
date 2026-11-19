# ResolveIQ Spec v1

## 1. Product statement
Who uses it?
What problem does it solve?
What does the AI do?
What does the human do?
## 2. User journey
1. Customer message arrives.
2. System stores the ticket with status NEW.
3. Processing starts; status becomes PROCESSING.
4. System classifies the ticket and detects the language.
5. System retrieves policy passages and looks up the order.
6. System generates a recommendation.
7. System validates it, or abstains and escalates.
8. Ticket moves to WAITING_FOR_REVIEW.
9. Reviewer approves, rejects, or escalates.
10. Decision is written to the audit trail.
## 3. Ticket categories
| Category | Definition | English example | Arabic example |
|---|---|---|---|
| `order_status` | Customer asks where an order is or when it will arrive | Where is my order? It has been 8 days. | فين طلبي؟ بقاله أسبوع ولسه ماوصلش |
| `return_refund` | Customer wants to return or exchange a working item | I'd like to return the shoes and get a refund. | عايز أرجّع المنتج وأسترد فلوسي |
| `damaged_or_wrong_item` | Item arrived broken, defective, or not what was ordered | The cup arrived cracked. | طلبت لون أسود وجالي أبيض |
| `payment_billing` | Money problems: double charge, failed payment, missing refund | I was charged twice for one order. | اتخصم مني المبلغ مرتين |
| `account_access` | Login problems, password reset, locked account | The reset email never arrives. | مش قادر أدخل على حسابي |
| `policy_question` | General question about rules, with no specific order problem | What is your return window for sale items? | سياسة الاستبدال عندكم إيه؟ |

### Tie-break rules

- Cause beats remedy: "It arrived broken, I want my money back" is damaged_or_wrong_item, not return_refund.
- Money-movement beats process: "My refund hasn't reached my card" is payment_billing. "How do I start a return?" is return_refund.
- A specific order problem beats a general question: if the message is about a particular order, it is not policy_question.
- If still tied, use this precedence: account_access > payment_billing > damaged_or_wrong_item > return_refund > order_status > policy_question.
## 4. Statuses, priorities, transitions

## 5. Out of scope

## 6. Acceptance criteria

## 7. Sketches