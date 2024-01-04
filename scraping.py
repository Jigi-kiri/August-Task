from bs4 import BeautifulSoup
import requests

def sracpy_data():
    url = "https://www.goodreads.com/quotes/tag/life"

    request_url = requests.get(url)
    if request_url.status_code==200:
        soup = BeautifulSoup(request_url.text, "html.parser")
        result=[]
        for r in soup.find_all("div", class_="quoteText"):
            result.append(r.get_text())
        return result
    else:
        print("There is an error to fetch the data.")
        return None
    
def write_into_file(data, file):
    pass
    with open(file, "w", encoding="utf-8") as f:
        for d in data:
            f.write(d + "\n")

data = sracpy_data()
if data:
    write_into_file(data, file="sample.txt")