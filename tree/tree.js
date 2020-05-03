'use strict';

class Node {
    constructor(data){
        this.data = data;
    }

    preOrder(node){
        if(node !== null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrder(node){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    postOrder(node){
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }
} 

