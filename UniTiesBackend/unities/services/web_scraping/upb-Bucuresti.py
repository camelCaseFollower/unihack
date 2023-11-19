from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import time
from bs4 import BeautifulSoup
def data_scraper_Bucuresti():
    # Create a new instance of the Chrome driver 
    # Navigate to the main page
    driver = webdriver.Firefox()
    driver.get("https://upb.ro/evenimente-upb/")

    # Find all the event links using their class name
    # Get the href attribute from each event link
    events = driver.find_elements(By.CLASS_NAME, "mec-color-hover")
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
        # Find the image directly within the container
        # Extract the URL of the image
        image_container = soup.find('div', class_="mec-events-event-image")
        image_elem = image_container.find('img')
        image_url = image_elem['src'] if image_elem and 'src' in image_elem.attrs else None

        # Extract the title
        titlu_eveniment = soup.find('h1', class_='entry-title').text.strip()

        # Extract the description
        description_elem = soup.find('div', class_='mec-single-event-description mec-events-content')
        description_text = description_elem.text.strip() if description_elem else None
        
        print("Image url:", image_url, "/n")
        print("Titlu eveniment:", titlu_eveniment, "/n")
        print("Descriere:", description_text, "/n")
        print("Uni image: ", "https://upb.ro/wp-content/uploads/2022/11/alegeri-upb.jpg", "/n")

    # Close the browser 
    driver.quit()