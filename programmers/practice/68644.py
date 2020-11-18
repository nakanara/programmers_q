"""
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다. 
"""

def solution(numbers):
    answer = set()    
    size   = len(numbers)

    aaa = [1,2,3,6,5,4]
    
    
    for k in range(0, size-1): 
        for j in range(k+1, size):            
            answer.add(numbers[k] + numbers[j])  

    
    return sorted(list(answer), reverse = True)

    


#result = solution([2,1,3,4,1]) # [2,3,4,5,6,7]
result = solution([5,0,2,7]) # [2,5,7,9,12]

print(result)