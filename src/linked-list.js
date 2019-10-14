const Node = require('./node');

class LinkedList {
    constructor() {
        this._head=null;
        this._tail=null;
        this.length=0;
    }

   append(data){
        const newNode=new Node(data);
        if (this.length==0){
            this._head=newNode;
            this._tail=newNode;
        }else{
            this._tail.next = newNode;
            newNode.prev = this._tail;

            this._tail = newNode;
        }
        this.length++;
        console.log(this);
        console.log('implement append');
        return this;
    }

    head() {
        if(this._head!==null){
            return this._head.data;
        }else{
            return null;
        }
    }

    tail() {
        if(this._tail!==null){
            return this._tail.data;
        }else{
            return null;
        }
    }

    at(index) {
        if (index < 0 || this._length <= index ) {
            return null;
          }
    
          let current = this._head;
          let position = 0;
    
          while (position < index) {
            current = current.next;
            position++;
          }
    
          return current.data;
    }

    insertAt(index, data) {
        if(index<0 || this._length<=index){
            return false;
        }
        let node= new Node(data);
        console.log(node);
        if(index==0){
            node.next=this._head;
            this.head.prev=node;
        }
        else if(index==this._length){
            this.tail.next = node;
            node.prev = this.tail;

            this.tail = node;
        }
        else{
            let current=this._head;
            let prev=null;
            let pos=0;

            while(pos<index){
                prev=current;
                current=current.next;
                pos++;
            }

            prev.next = node;
            node.prev = prev;

            node.next = current;
            current.prev = node;
        }
        this._length++;
        console.log('implement insertAt');
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head=null;
        this._tail=null;
        this.length=0;
        console.log('implement clear');
        return this;
    }

    deleteAt(index) {
        if(index<0 || this._length<=index){
            return false;
        }
        let current;
        if(index==0){
            this._head=null;
            this._tail=null;
            this.length=0;
        }
        else if(index==this._length-1){
            current=this._tail;
            this._tail=this._tail.prev;
            this._tail.next=null;
        }
        else{
            current=this._head;
            let prev=null;
            let pos=0;

            while(pos<index){
                prev=current;
                current=current.next;
                pos++;
            }
            prev.next = current.next;
            current.next.prev = prev;
        }
    
        this.length--;
        console.log('implement deleteAt');
        return this;
    }

    reverse() {
        let newHead=this._head;
        let newTail=this._tail;
        this._head=newTail;
        this._tail=newHead;
        let current=this._head;
        let i=0;
        if(this.length>1){
            while(i<this.length){
                let prev=current.prev;
                let next=current.next;
                current.prev=next;
                current.next=prev;
                current=current.next;
                i++;
            }
        }
        console.log('implement reverse');
        return this;
    }

    indexOf(data) {
        let current=this._head;
        let pos=0;
        while(current){
            if(current.data==data){
                return pos;
            }
            current=current.next;
            pos++;
        }
        return -1;
    };
}

module.exports = LinkedList;
