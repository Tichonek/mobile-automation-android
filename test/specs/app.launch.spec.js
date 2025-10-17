describe('Prosty test uruchamiania aplikacji', () => {
    it('Powinien otworzyć aplikację i zamknąć po 5 sekundach', async () => {
        console.log('Aplikacja uruchomiona');

        await driver.pause(5000);

        console.log('Zamykanie aplikacji');
        await driver.terminateApp('de.danoeh.antennapod.debug');

    })
})