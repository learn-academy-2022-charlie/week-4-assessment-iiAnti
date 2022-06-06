# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

#create a method called numbers
# if the number % 2 is equal to 0 then print that is is even with interpolation #{}
# if it is not then print that it is odd

def numbers(which) 
    if which % 2 == 0 
          "#{which} is even"
    else
         "#{which} is odd "
    end
end

p numbers(num1) 
p numbers(num2) 
p numbers(num3) 

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowels(none)
    str_arr = none.split("")
    vowels = "Aaeiou"   #did this 'A'..'z' and realized it took everything out😂
    i = 0
    while i < none.length
      if vowels.include?(none[i])
        str_arr[i] =  ""
      end
      i +=1
    end
    new_string = str_arr.join
end

p vowels(album1)
p vowels(album2)
p vowels(album3)
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def palin string
    if string == string.reverse.capitalize
        "#{string} is a Palindrom"
    else
        "#{string} is not a palindrome"
    end
end

p palin(palindrome_tester1)
p palin(palindrome_tester2)
p palin(palindrome_tester3)