class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_obj = {};
        const t_obj = {};
        if(s.length != t.length) return false;
        for(let  i = 0 ; i < s.length ; i ++){
            s_obj[s[i]] = (s_obj[s[i]] || 0) + 1;
            t_obj[t[i]] = (t_obj[t[i]] || 0) + 1;
        }
        for (let key in s_obj){
            if(s_obj[key] != t_obj[key]) return false;
        }
        return true;
    }
}
