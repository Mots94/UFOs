# :alien: UFOs :alien:

## Overview 
In this analysis, Dana would like to further develop her web application by increasing the filtering capability.  Before completing this challenge, the table developed to display UFO sightings could only be filtered by date.  In some cases, there are many UFO observations on a particular date, meaning an end user would still have many data points to sift through.  Therefore, filters were created for four other criteria in the table: city, state, country, and shape.  This added capability could be particularly useful for someone who may only want to look at UFO sighting data in one state, or multiple cities within a state. 

## Results
This webpage could be used to drill down to one or a few UFO observations by starting with one filter and adding others to the original filter.  For example, if one was to filter by the date "1/12/2020" for this data set, below is what the observation table would look like.

![UFO1](https://github.com/Mots94/UFOs/blob/main/static/images/dateFilter.PNG)

If a user was only searching for observations on a particular date, then filtering could stop here.  However, other users may want find observations on 1/12/2020 in a particular state.  Let's use Oregon as an example since there are two observations in the filtered table.  If a user types "or" into the "Enter a State" input box, the following filtered table would appear.

![UFO2](https://github.com/Mots94/UFOs/blob/main/static/images/stateFilter.PNG)

This has now narrowed down a large data set to just two observations, which could be filtered even further if the user only wanted to see one of these two.  Filtering by shape would allow a user to view just one row of this table.  For example, if "changing" was entered into the "Enter a Shape" input box, the filtered table would appear as below.

![UFO3](https://github.com/Mots94/UFOs/blob/main/static/images/shapeFilter.PNG)

If a user wanted to clear all filters to start over, that person could simply delete all entries in the filter boxes or click the "UFO Sightings" navigation bar at the top of the page to refresh the whole page.

## Summary
One of the major drawbacks to this new design is that UFO sighting data does not exist for multiple years, and some states and cities are not part of this data set.  If a user has not looked at the full table of data and tries to filter for sightings on 3/31/2008, no data would populate in the table.  This individual may simply think something is wrong with the table and navigate away from this website instead of interacting with it.  There are two things that can be done to address this drawback.  First, the website developer could source a larger dataset to use in the sightings table so the filtered results are not as limited.  Another option would be to add a message when no data exists based on the filters entered.  Since nothing would appear in the table, a simple message box with the message "No Sightings Exist for the Given Criteria" would be much more informative to an end user.  Another drawback to this website is that an end user cannot download their filtered data in a usable format.  Filtered data can only be viewed in the table.  Adding the ability to export the filtered table as a CSV file may be useful to individuals who could need this information for a project.
