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
driver.get("https://admitere.upt.ro/evenimente/lista/")

#print("Uni logo:", "https://admitere.upt.ro/wp-content/uploads/2022/10/logo_upt.png")
print("Uni image:", "https://admitere.upt.ro/wp-content/uploads/2022/10/Asset-1.jpg")

print("")

# Find all the event links using their class name
events = driver.find_elements(By.CLASS_NAME, "tribe-events-calendar-latest-past__event-featured-image-link")

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
    image_container = soup.find('div', class_='tribe-events-event-image')

    # Find the image directly within the container
    image_elem = image_container.find('img')

    # Extract the URL of the image
    image_url = image_elem['src'] if image_elem and 'src' in image_elem.attrs else None

    print("Image url:", image_url)
    
    #Extract the date of the event
    data_eveniment = soup.find('div', class_='data-eveniment').text.strip()
    print("Data evenimentului:", data_eveniment)

    # Extract the text inside the <div> with class "titlu-eveniment"
    titlu_eveniment = soup.find('div', class_='titlu-eveniment').text.strip()
    # Extract the text inside the <div> with class "subtitlu-eveniment"
    if soup.find('div', class_='subtitlu-eveniment'):
        subtitlu_eveniment = soup.find('div', class_='subtitlu-eveniment').text.strip()

    # Print or use the extracted text
    print(titlu_eveniment)
    if soup.find('div', class_='subtitlu-eveniment'):
        print(subtitlu_eveniment)

    # Extract the description
    description_elem = soup.find('div', class_='tribe-events-single-event-description')
    description_text = description_elem.text.strip() if description_elem else None
    
    print("Descriere:", description_text)
    
    print("")

# Close the browser when you're done
driver.quit()