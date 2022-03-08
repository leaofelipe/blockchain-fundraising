# Fundraising project built on Ethereum Blockchain
##### **This project was created for study purposes only.**
<br>

---

## Campaign Smart Contract
### **Variables**
| Variable | Type | Description |
| --- | --- | :--- |
| `manager` | address | address of the contract manager |
| `minimumContribution` | uint | Minimum donation required |
| `approvers` | address[] | List of every donator |
| `requests` | Request[] | List of requests that the manager has created. |

### **Functions**
| Function | Description |
| --- | :--- |
| `Campaign` | Constructor function that sets the minimumContributing and the Owner |
| `contribute` | Called when someone wants to donate money to the campaign and become an 'approver' |
| `createRequest` | Called by the manager to create a new 'spending request' |
| `approveRequest` | Called by each contributor to approve a spending request |
| `finalizeRequest` | After a request has gotten enought approvals, the manager can call this to get money sent to the vendor |
