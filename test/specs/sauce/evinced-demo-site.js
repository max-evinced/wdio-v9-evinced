import { expect } from '@wdio/globals'

describe('Evinced Demo Site', () => {
    it('should have many accessibility issues', async () => {
        await browser.url("https://demo.evinced.com")
        const issues = await browser.evAnalyze()
        console.log(issues) 
    })
})
