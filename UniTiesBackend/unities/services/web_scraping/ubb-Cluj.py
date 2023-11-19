from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from bs4 import BeautifulSoup
from urllib.request import urlopen

# Create a new instance of the Chrome driver 
driver = webdriver.Chrome()

# Navigate to the main page
driver.get("https://news.ubbcluj.ro/events/categorie/evenimente/")

#print("Uni logo: ", "https://news.ubbcluj.ro/wp-content/uploads/2016/11/b6ba9f_63e01851b6664086b343aeeff55d7542-mv2.png")
print("Uni image: ", "https://news.ubbcluj.ro/wp-content/uploads/2021/04/Universitatea-Babes-Bolyai.jpg")

print("")

# Find all the event links using their class name
events = driver.find_elements(By.CLASS_NAME, "tribe-events-calendar-list__event-title-link")

# Get the href attribute from each event link
links_events = [event.get_attribute('href') for event in events]

#print(links_events)

# Iterate through each event link and extract information from the linked page
for link in links_events:
    # Open the event link
    driver.get(link)
   
    # Wait for the event page to load (you may need to adjust the timeout)
    wait = WebDriverWait(driver, 5)
    time.sleep(15)
    # wait.until(EC.presence_of_element_located((By.CLASS_NAME, <class_name>)))

    # Now you can use Beautiful Soup to parse the HTML of the event page
    html = driver.page_source  # Get the HTML of the current page
    soup = BeautifulSoup(html, 'html.parser')

    # Extract each image

    # Find the div with class "tribe-events-event-image"
    image_container = soup.find('div', class_='tribe-events-single-event-description tribe-events-content')

    # Find the image directly within the container
    image_elem = image_container.find('img')

    # Extract the URL of the image
    image_url = image_elem['src'] if image_elem and 'src' in image_elem.attrs else None

    print("Image url:", image_url)
    
    #Extract the date of the event
    data_eveniment = soup.find('span', class_='tribe-event-date-start').text.strip()
    ora_eveniment = soup.find('span', class_='tribe-event-time').text.strip()
    data_finala = data_eveniment + "-" + ora_eveniment
    print("Data evenimentului:", data_finala)
    
    # Extract the title
    titlu_eveniment = soup.find('h1', class_='entry-title post-title').text.strip()
    
    # Print or use the extracted text
    print(titlu_eveniment)

    # Extract the description

    description_elem = soup.find('div', class_='tribe-events-single-event-description tribe-events-content')
    
    description_text = description_elem.text.strip() if description_elem else None
    
    print("Descriere:", description_text)
    
    print("")

# Close the browser 
driver.quit()