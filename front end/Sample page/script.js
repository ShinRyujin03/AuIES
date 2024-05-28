document.addEventListener("DOMContentLoaded", function () {
    const samples = {
        '5.5': [
            { text: "Sample for band 5.5 - Shopping habits depend more on your age group than anything else...", band: "5.5" },
            // ...more samples
        ],
        '6.0': [
            { text: "Sample for band 6.0 - Shopping habits depend more on your age group than anything else...", band: "6.0" },
            // ...more samples
        ],
        '6.5': [
            { text: "Sample for band 6.5 - Shopping habits depend more on your age group than anything else...", band: "6.5" },
            // ...more samples
        ],
        '7.0': [
            { text: "Sample for band 7.0 - Shopping habits depend more on your age group than anything else...", band: "7.0" },
            // ...more samples
        ],
        '7.5': [
            { text: "Sample for band 7.5 - Shopping habits depend more on your age group than anything else...", band: "7.5" },
            // ...more samples
        ],
        '8.0': [
            { text: "Sample for band 8.0 - Shopping habits depend more on your age group than anything else...", band: "8.0" },
            // ...more samples
        ],
        '8.5': [
            { text: "Sample for band 8.5 - Shopping habits depend more on your age group than anything else...", band: "8.5" },
            // ...more samples
        ],
        '9.0': [
            { text: "Sample for band 9.0 - Shopping habits depend more on your age group than anything else...", band: "9.0" },
            // ...more samples
        ],
    };

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    renderSamples("all", samples);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            renderSamples(tab, samples);
        });
    });

    function renderSamples(currentTab, allSamples) {
        tabContents.forEach(content => content.style.display = 'none');
        const sampleContainer = document.getElementById(currentTab);
        sampleContainer.style.display = 'block';
        sampleContainer.innerHTML = '';
        let samplesToDisplay = [];
        if (currentTab === "all") {
            for (const band in allSamples) {
                samplesToDisplay = samplesToDisplay.concat(allSamples[band]);
            }
        } else {
            samplesToDisplay = allSamples[currentTab];
        }

        samplesToDisplay.forEach(sample => {
            const sampleElement = document.createElement('div');
            sampleElement.classList.add('sample');

            const bandLabel = document.createElement('span');
            bandLabel.classList.add('sample-band');
            bandLabel.textContent = `${sample.band} band`;

            const text = document.createElement('p');
            text.textContent = sample.text;

            sampleElement.appendChild(bandLabel);
            sampleElement.appendChild(text);
            sampleContainer.appendChild(sampleElement);
        });

        // Mark the active tab
        tabButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.tab-button[data-tab="${currentTab}"]`).classList.add('active');
    }
});
