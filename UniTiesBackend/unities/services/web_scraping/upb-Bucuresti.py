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

    new_links_events = []
    for i in range(len(links_events)):
        if links_events[i] not in new_links_events:
            new_links_events.append(links_events[i])
    links_events = new_links_events

    # Get date for each event
    dates = driver.find_elements(By.CLASS_NAME, "mec-start-date-label")
    dates_events = [date.text for date in dates]



    # Iterate through each event link and extract information from the linked page
    events_dict = {}
    for count, link in enumerate(links_events):
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

        my_dict = {
            "_id": str(time.time()),
            "name": titlu_eveniment,
            "description": description_text,
            "county": "Cluj",
            "date": dates_events[count],  # Assign the value of data_eveniment_start
            "organizer": "Universitatea Babes-Bolyai",
            "imageUrl": image_url,
            "category": "General",   #Needs generalisation
            "articleUrl": link
            }
        print(my_dict, "/n")
        events_dict[my_dict["_id"]] = my_dict
    
    driver.quit()
    return events_dict
    # Close the browser

data_scraper_Bucuresti()

