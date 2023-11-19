from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
#from selenium.webdriver.support import expected_conditions as EC
import time
from bs4 import BeautifulSoup
#from urllib.request import urlopen

# Create a new instance of the Chrome driver
driver = webdriver.Firefox()

# Navigate to the main page
driver.get("https://news.ubbcluj.ro/events/categorie/evenimente/")

# Find all the event links using their class name
events = driver.find_elements(By.CLASS_NAME, "tribe-events-calendar-list__event-title-link")

# Get the href attribute from each event link
links_events = [event.get_attribute('href') for event in events]

# Iterate through each event link and extract information from the linked page
for link in links_events:
    # Open the event link
    driver.get(link)

    # Wait for the event page to load (you may need to adjust the timeout)
    wait = WebDriverWait(driver, 5)
    time.sleep(15)

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


    #Extract the date of the event
    
    data_eveniment_start = soup.find('span', class_='tribe-event-date-start')
    data_eveniment_end = soup.find('span', class_='tribe-event-date-end')
    ora_eveniment = soup.find('span', class_='tribe-event-time')

    if data_eveniment_start is not None:
        data_eveniment_start = soup.find('span', class_='tribe-event-date-start').text.strip()
        print(data_eveniment_start)
    if data_eveniment_end is not None:
        data_eveniment_end = soup.find('span', class_='tribe-event-date-end').text.strip()
        print(data_eveniment_end)
    if ora_eveniment is not None:
        ora_eveniment = soup.find('span', class_='tribe-event-time').text.strip()
        print(ora_eveniment)

    

    #data_finala = data_eveniment + "-" + ora_eveniment

    # Extract the title
    titlu_eveniment = soup.find('h1', class_='entry-title post-title').text.strip()

    # Print or use the extracted text

    # Extract the description

    description_elem = soup.find('div', class_='tribe-events-single-event-description tribe-events-content')
    description_text = description_elem.text.strip() if description_elem else None

    print("Uni image: ", "https://news.ubbcluj.ro/wp-content/uploads/2021/04/Universitatea-Babes-Bolyai.jpg")
    print("")
    #print("Data evenimentului:", data_finala)
    print(titlu_eveniment)
    print("Image url:", image_url)
    print("Descriere:", description_text)
'''
    print("")
    my_dict = {
        "name": titlu_eveniment,
        "description": description_text,
        "county": "Cluj",
        "accommodation": False,
        "dateStart": data_eveniment,
        "dateEnd": data_finala,
        "organizer": "Universitatea Babes-Bolyai",
        "imageUrl": image_url,
        "category": None
    }
'''
# Close the browser
driver.quit()