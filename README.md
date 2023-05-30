# AHKPKatas

Before you start:
- Try not to read ahead .
- Do one task at a time. The trick is to learn to work incrementally.
- Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata
- Test First!

## String Calculator

### First exercise
1. In a test-first manner, create a simple class StringCalculator
   with a method public int Add(string numbers)
2. The method can take 0, 1 or 2 numbers, and will return their sum
   (for an empty string it will return 0)
   for example
   “” == 0 , “1” == 1 , “1,2” == 3
3. Start with the simplest test case of an empty string and move to one & two
   numbers
4. Remember to solve things as simply as possible so that you force yourself to
   write tests you did not think about
5. Remember to refactor after each passing test