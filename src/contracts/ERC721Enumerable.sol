// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './ERC721.sol';
import './interfaces/IERC721Enumerable.sol';

contract ERC721Enumerable is ERC721, IERC721Enumerable{

    uint [] private _allTokens;

    // mapping from tokenId to position in _allTokens array
    mapping(uint => uint) private _allTokensIndex;
    
    // mapping from owner to list of all owner token ids
    mapping(address => uint[]) private _ownedTokens;
    
    // mapping from tokenId to index of the owner tokens list
    mapping(uint => uint) private _ownedTokensIndex;

    constructor() {
        _registerInterface(bytes4(keccak256('totalSupply(bytes4)')
        ^keccak256('tokenrByIndex(bytes4)')
        ^keccak256('tokenOfOwnerByIndex(bytes4)')));
    }
    
    function _mint(address to, uint tokenId) internal override(ERC721) {
        super._mint(to, tokenId);
        _addTokensToAllTokenEnumeration(tokenId);
        _addTokensToOwnerEnumeration(to, tokenId);
    }

    // function _burn(address _of, uint tokenId) internal override(ERC721) {
    //     super._burn(_of, tokenId);
    //     _deleteTokensFromAllTokenEnumeration(tokenId);
    //     _deleteTokensFromOwnerEnumeration(_of, tokenId);
    // }

    // function _deleteTokensFromAllTokenEnumeration(uint tokenId) private {
    //     require(_exists[tokenId],"Token does not exists 2");
    //     _
    // }
    
    function _addTokensToOwnerEnumeration(address to, uint tokenId) private{
        _ownedTokensIndex[tokenId] = _ownedTokens[to].length;
        _ownedTokens[to].push(tokenId);

    }

    function _addTokensToAllTokenEnumeration(uint tokenId) private {
        _allTokensIndex[tokenId] = _allTokens.length;
        _allTokens.push(tokenId);
    }

    function tokenByIndex(uint index) public view override returns(uint) {
        require(index < totalSupply(),"Global index is out of bound!!!");
        return _allTokens[index];
    }

    function tokenOfOwnerByIndex(address owner, uint index) public view override returns(uint){
        require(index < balanceOf(owner),"Owner index is out of bound!!!");
        return _ownedTokens[owner][index];
    }

    function totalSupply() public view override returns(uint) {
        return _allTokens.length;
    }
}