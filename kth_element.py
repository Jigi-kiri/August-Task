# lst = [2,3,1,4,5,65,3,9,7]
# k=3

def kth_element(lst, k):
    if len(lst) < 0:
        return "Not Valid input"
    sorted_list =sorted(lst, reverse=True)

    if k>= len(lst):
        return sorted_list
    return sorted_list[:k]


result = kth_element([3,2,1,5,6,7],3)
print(result)
    