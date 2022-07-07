ERC20 token standard has in total 6 functions and 2 events

The 6 functions inside the ERC20 token standard are:

1. totalSupply(): This function allows instance of a contract to calculate and return the total amount of tokens that exists.

2. balanceOf(): This function allows a smart contract to store and return the balance of the provided address. The function accepts address as a parameter, so it should be known that the balance of any address is public.

3.transfer(): This function lets the owner of the contract send a given amount of the token to another address just like a conventional cryptocurrency transaction.

4.transferFrom(): This function allows a smart contract to automate the process and send a given amount of token on behalf of the owner. This function is like an automatic transfer function like the one which is collaborated with the bank where bank acts a collaborator unlike the primitive transfer function.

5.approve(): This function allows the owner of the contract to authorize and approve the given address to withdraw instance of the token from the owners address. The msg field is an implicit field that is provided by external wallet applications to interact with the contract. In this function msg.sender store and process the data given by external applications.

6. allownace(): This function returns the amount which spender is allowed to withdraw from the owner.

The 2 events inside the ERC20 token standard are:

1.Transfer: This event is triggered when the tokens are transffered.

2.Approval: This event is triggered whenever approval is called
