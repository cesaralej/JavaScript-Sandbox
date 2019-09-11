//Elements Path
    const elementsXPath = `//tr[td]`,
        projectDomainXPath = `./td[1]/div/span`,
        pojectDeleteXPath = `./td[4]/div/button[2]`,
        confirmDeleteXPath = `/html/body/div[1]/div/div[2]/div/div[3]/span/button[2]`

    let elements = await getProjectsDelete(driver)
    console.log('Elements found: ' + Array.from(elements).length)

    count = 0
    //While there are rows with a matching domain
    //while (Array.from(elements).length > 0) {
    while (count < 3) {
        console.log('Elements remaining')
        console.log('Deleting test project')
        await deleteProject(elements[1], driver)
        console.log('Fetching other test projects')
        elements = await getProjectsDelete(driver)
        count++
        console.log(count)
    }
    
    async function getProjectsDelete(driver) {
        console.log('Fetching test projects')
        await driver.wait(until.elementsLocated(By.xpath(elementsXPath)), maxTime);
        let elements = await driver.findElements(By.xpath(elementsXPath));
        console.log('Filtering test projects')
        elements = elements.filter(projectFilter)
        console.log('Done filtering')
        return elements
    }

    function projectFilter(element) {
        projectDomain = element.findElement(By.xpath(projectDomainXPath)).getText()
        //Regular expression make sure the range of numbers is correct
        console.log('filtering')
        return projectDomain.match(/test[0-9]{11,12}\.com/g)
    }

    async function deleteProject(project, driver) {
        console.log('Clicking on delete')
        const projectDelete = await project.findElement(By.xpath(pojectDeleteXPath))
        await projectDelete.click()
        console.log('Confirming delete')
        const confirmDelete = await driver.findElement(By.xpath(confirmDeleteXPath))
        await confirmDelete.click()
    }