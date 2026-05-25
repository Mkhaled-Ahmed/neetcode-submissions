class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i = 0 ; i < strs.length ; i++){
            const count = new Array(26).fill(0);
            const word = strs[i];
            for(let j = 0; j < word.length; j++){
                const index = word.charCodeAt(j) - "a".charCodeAt(0);
                count[index]++;
            }
            const key = count.join("#");

            if(!map.has(key)){
                map.set(key, []);
            }

            map.get(key).push(word);
            }
        return Array.from(map.values());
    }
}
