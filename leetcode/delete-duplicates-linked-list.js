
const a = new ListNode(3, new ListNode(1, new ListNode(2, new ListNode(2, null))))

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    let sentinel = new ListNode(0, head);
    let pred = sentinel;
    while(head){
        if (head.next && head.val === head.next.val){
            while (head.next && head.val === head.next.val){
                head = head.next
            }
            pred.next = head.next;
        } else {
            pred = pred.next;
        }

        head = head.next;
    }

    return sentinel.next
};

console.log(deleteDuplicates(a));
