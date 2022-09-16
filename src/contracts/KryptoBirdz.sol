// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import './ERC721Connector.sol';

contract KryptoBird is ERC721Connector {

    constructor () ERC721Connector('KryptoBird','KBIRDZ'){

    }

    mapping(string => bool) _kryptoBirdzExists;

    string[] public KryptoBirdz;

    function mint(string memory _kryptoBird) public {
        require(!_kryptoBirdzExists[_kryptoBird],"Error - kryptoBird already exists");
        KryptoBirdz.push(_kryptoBird);
        uint _id = KryptoBirdz.length - 1;

        _mint(msg.sender, _id);

        _kryptoBirdzExists[_kryptoBird] = true;
    }

    // function transfer() public {
    //     require(_kryptoBirdzExists[]);
    // }
}