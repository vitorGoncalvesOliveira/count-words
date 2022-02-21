module.exports = {
    wordFrequency: function(doc, word){
        const regex = new RegExp(word, 'gi')
        const frequency = doc.match(regex)
        
        return frequency?.length || 0       
    },

    wordSentences: function(doc, word){
        const endLine = ['.',';',':','\n'];
        const regex = new RegExp(word, 'gi')
        
        
        const allSetencesInDocument = [];
        let initSetence = false;        
        let makeSetences = [];
        const characteres = doc.split('');

        characteres.forEach(element => {

            if(this.isInitOfSetences(element, initSetence)){
                initSetence = true;
            }
            if(initSetence){
                makeSetences.push(element)
            }
            if(endLine.includes(element) && initSetence){
                let setence = makeSetences.join('');
                allSetencesInDocument.push(setence)
                initSetence = false;
                makeSetences = []
            }            
        });

        const response = allSetencesInDocument.filter(setenc => regex.test(setenc) );

        return response;
    },

    isInitOfSetences(element, initSetence){
        const endLine = ['.',';',':','\n'];
        const onlyNumbers = new RegExp("[0-9]");
        return !endLine.includes(element) && element === element.toUpperCase() && !initSetence && element !== ' ' && !onlyNumbers.test(element);
    },

    topWords: function(doc, count, minWordLength){
        //REFACTOR

        const allWords = this.stringToWordsArray(doc);

        const wordThatHasMinimun = allWords.reduce((inital, word) => {
            
            if(word.length >= minWordLength){

                let index = inital.findIndex(w => w.word.toLowerCase() === word.toLowerCase())
                if(index < 0){
                    inital.push({word: word.toLowerCase(), count:1 })
                }else{
                    inital[index].count ++;
                }

            }
            return inital
        },[]);


        const sortTopWords = this.quickSort(wordThatHasMinimun);
        const topWordsByCount = sortTopWords.slice(0,count);
        
        return topWordsByCount;
        
    },

    stringToWordsArray: function(text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    },

    quickSort(array){
    
        if(array.length < 2){
            return array;
        }
        else{
            const pivo = array[0];
            array.splice(0,1)
            const menores = array.filter(element => element.count > pivo.count)
            const maiores = array.filter(element => element.count <= pivo.count)
    
            return this.quickSort(menores).concat(pivo , this.quickSort(maiores))
        }
    }
}

