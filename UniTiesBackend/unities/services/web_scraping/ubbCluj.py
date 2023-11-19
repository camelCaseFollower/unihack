from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import time
from bs4 import BeautifulSoup


def data_scraper_Cluj():
    # Create a new instance of the Chrome driver
    # Navigate to the main page
    driver = webdriver.Firefox()
    driver.get("https://news.ubbcluj.ro/events/categorie/evenimente/")

    # Find all the event links using their class name
    # Get the href attribute from each event link
    events = driver.find_elements(By.CLASS_NAME, "tribe-events-calendar-list__event-title-link")
    links_events = [event.get_attribute('href') for event in events]

    #Dictionary to store the extracted data
    events_dict = {}

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

        # Extract the title and format it
        titlu_eveniment = soup.find('h1', class_='entry-title post-title').text.strip()

        # Extract the description and format it
        description_elem = soup.find('div', class_='tribe-events-single-event-description tribe-events-content')
        description_text = description_elem.text.strip() if description_elem else None

        if data_eveniment_start is not None:
            data_eveniment_start = soup.find('span', class_='tribe-event-date-start').text.strip()

        if data_eveniment_end is not None:
            data_eveniment_end = soup.find('span', class_='tribe-event-date-end').text.strip()
            data_eveniment = data_eveniment_start + "-" + data_eveniment_end

        else:
            ora_eveniment = soup.find('span', class_='tribe-event-time').text.strip()
            data_eveniment = data_eveniment_start + "-" + ora_eveniment

        my_dict = {
            "_id": str(time.time()),
            "name": titlu_eveniment,
            "description": description_text,
            "county": "Cluj",
            "date": data_eveniment,  # Assign the value of data_eveniment_start
            "organizer": "Universitatea Babes-Bolyai",
            "imageUrl": image_url,
            "category": "General",   #Needs generalisation
            "articleUrl": link
            }
        events_dict[my_dict["_id"]] = my_dict

    # Close the browser
    driver.quit()
    return events_dict
