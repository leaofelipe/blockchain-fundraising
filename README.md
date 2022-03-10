[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![Solidity version](https://img.shields.io/static/v1?label=Solidity&message=0.4.17&color=informational)](https://docs.soliditylang.org/en/v0.4.17)

# Fundraising project built on Ethereum Blockchain
##### **This project was created for study purposes only.**
<br>

## Campaign Smart Contract
### **Variables**
| Variable | Type | Description |
| --- | --- | :--- |
| `manager` | address | address of the contract manager |
| `minimumContribution` | uint | Minimum donation required |
| `approvers` | mapping | List of every donator |
| `requests` | Request[] | List of requests that the manager has created. |

### **Functions**
| Function | Description |
| --- | :--- |
| `Campaign` | Constructor function that sets the minimumContributing and the Owner |
| `contribute` | Called when someone wants to donate money to the campaign and become an 'approver' |
| `createRequest` | Called by the manager to create a new 'spending request' |
| `approveRequest` | Called by each contributor to approve a spending request |
| `finalizeRequest` | After a request has gotten enought approvals, the manager can call this to get money sent to the vendor |

### **Request Struct**
| Variable | Type | Description |
| --- | --- | :--- |
| `description` | string | Purpose of request |
| `amount ` | uint | Ether to transfer | 
| `recipient` | address | Who gets the money |
| `complete` | bool | Whether the request is done |
| `approvals` | mapping | Track who has voted |
| `approvalCount` | uint | Track number of approvals |