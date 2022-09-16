// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './ERC165.sol';
import './interfaces/IERC721.sol';
import './libraries/Counters.sol';

contract ERC721 is ERC165, IERC721 {

    using SafeMath for uint256;
    using Counters for Counters.Counter;
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    // mapping from token id to the owner
    mapping(uint256 => address) private _tokenOwner;

    // mapping from owner to number of owned tokens
    mapping(address => Counters.Counter) private _OwnedTokensCount;

    // mapping from token id to approved addresses
    mapping(uint256 => address) private _tokenApprovals;
    
    constructor() {
        _registerInterface(bytes4(keccak256('balanceOf(bytes4)')
        ^keccak256('ownerOf(bytes4)')
        ^keccak256('transferFrom(bytes4)')));
    }

    function balanceOf(address _owner) public view override returns(uint256){
        require(_owner != address(0),"owner query for non-existent token");
        return _OwnedTokensCount[_owner].current();
    }

    function ownerOf(uint256 _tokenId) public view override returns(address){
        require(_tokenOwner[_tokenId] != address(0),"owner query for non-existent token");
        return _tokenOwner[_tokenId];
    }

    function _exists(uint256 tokenId) internal view returns(bool){
        address owner = _tokenOwner[tokenId];
        return owner != address(0);
    }

    function _mint(address to, uint256 tokenId) internal virtual{
        require(to != address(0),"ERC721: minting to the zero address");
        require(!_exists(tokenId),"The token is already minted!!!");
        _tokenOwner[tokenId] = to;
        _OwnedTokensCount[to].increment();
        emit Transfer(address(0), to, tokenId);
    }

    // function _burn(address _of, uint256 _tokenId) internal  virtual{
    //     require(_of == msg.sender, "Only owner can burn the token");
    //     require(_exists(tokenId),"Token does not exists to burn");
    //     _tokenOwner[_tokenId] = null;
    //     _OwnedTokensCount[_of].decrement();
    //     _tokenApprovals[_tokenId] = null;
    // }


    function _transferFrom(address _from, address _to, uint256 _tokenId) internal {
        require(_to != address(0), 'Error - ERC721 Transfer to the zero address');
        require(ownerOf(_tokenId) == _from, "Trying to transfer a token the address does not own!");

        _OwnedTokensCount[_from].decrement();
        _OwnedTokensCount[_to].increment();

        _tokenOwner[_tokenId] = _to;

        emit Transfer(_from, _to, _tokenId);
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) override public {
        require(isApprovedOrOwner(msg.sender, _tokenId), "Error - isApprovedOrOwner error in transferFrom function!!!");
        _transferFrom(_from, _to, _tokenId);
    }

    function approve(address _to, uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        require(owner != _to,"Error - approval to current owner");
        require(msg.sender == owner,"Current caller is not the owner");
        _tokenApprovals[tokenId] = _to;
        emit Approval(owner, _to, tokenId);
    }

    function isApprovedOrOwner(address spender, uint256 tokenId) internal view returns(bool) {
        require(_exists(tokenId), "token does not exist");
        address owner = ownerOf(tokenId);
        return (spender == owner);
    }

}