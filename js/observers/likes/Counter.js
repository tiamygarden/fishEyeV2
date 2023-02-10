export default class Counter {
    update(action) {
        const el = document.getElementById('totalLikes');
        let count = el.innerHTML;

        if (action === 'INC') {
            count++;
        } else if (action === 'DEC') {
            count--;
        } else {
            throw 'unknown action';
        }

        el.innerHTML = count;
    }
}
