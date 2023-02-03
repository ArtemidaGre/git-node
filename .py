print("enter word!")
wordInf = input(">")

bufferedWord = wordInf[:-1]; bufferedWord = bufferedWord[:-1]
print(bufferedWord+"-\n"+(wordInf[-1] + wordInf[-2]))


def sprOne(word):
    print("Je "+bufferedWord + "e")
    print("Tu "+bufferedWord + "es")
    print("Il/Elle "+bufferedWord + "e")
    print("Nous "+bufferedWord + "ons")
    print("Vous "+bufferedWord + "ez")
    print("Ils/Elles "+bufferedWord + "ent")
    
def sprTwo(word):
    print("Je "+bufferedWord + "is")
    print("Tu "+bufferedWord + "is")
    print("Il/Elle "+bufferedWord + "it")
    print("Nous "+bufferedWord + "issons")
    print("Vous "+bufferedWord + "issez")
    print("Ils/Elles "+bufferedWord + "issent")
    
if (wordInf[-0] + wordInf[-1] == "er"):
    sprOne(wordInf)
elif (wordInf[-0] + wordInf[-1] == "ir"):
    sprTwo(wordInf)