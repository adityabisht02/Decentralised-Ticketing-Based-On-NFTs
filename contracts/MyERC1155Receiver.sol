// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";

abstract contract MyERC1155Receiver is IERC1155Receiver {
    function  onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes memory data
    ) public pure override returns (bytes4) {
        // Handle the token transfer here
        // ...
        
        // Return the ERC1155 receiver function selector
        return this.onERC1155Received.selector;
    }

     //methods for erc1155 receiever
    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) public pure override returns (bytes4) {
        // Implement your logic here
        return this.onERC1155BatchReceived.selector;
    }
}