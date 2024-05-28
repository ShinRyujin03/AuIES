document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', () => {
        searchBar.focus();
    });

    const topics = {
        opinion: [
            { text: "Shopping habits depend more on your age group than anything else. To what extent do you agree or disagree?", written: false },
            { text: "Governments in many countries have recently introduced special taxes on foods and beverages with high levels of sugar...", written: true },
            { text: "Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations. Discuss both these views and give your own opinion.", written: false }
        ],
        discussion: [
            { text: "Some people believe that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer. What, in your opinion, should be the main function of a university?", written: true },
            { text: "In some countries, young people are encouraged to work or travel for a year between finishing high school and starting university studies. Discuss the advantages and disadvantages for young people who decide to do this.", written: false },
            { text: "Some experts believe that it is better for children to begin learning a foreign language at primary school rather than secondary school. Do the advantages of this outweigh the disadvantages?", written: false }
        ]
    };

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    renderTopics("all", topics);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            renderTopics(tab, topics);
        });
    });

    function getWrittenTopics() {
        const result = [];
        for (const category in topics) {
            for (const topic of topics[category]) {
                if (topic.written) {
                    result.push({ ...topic, tabName: category });
                }
            }
        }
        return result;
    }

    function renderTopics(currentTab, allTopics) {
        tabContents.forEach(content => content.style.display = 'none');
        const topicContainer = document.getElementById(currentTab);
        topicContainer.style.display = 'block';
        topicContainer.innerHTML = '';
        let topicsToDisplay = [];
        if (currentTab === "all") {
            for (const category in allTopics) {
                topicsToDisplay = topicsToDisplay.concat(allTopics[category].map(topic => ({ ...topic, tabName: category })));
            }
        } else if (currentTab === "your") {
            topicsToDisplay = getWrittenTopics();
        } else {
            topicsToDisplay = allTopics[currentTab].map(topic => ({ ...topic, tabName: currentTab }));
        }

        topicsToDisplay.forEach(topic => {
            const topicElement = document.createElement('div');
            topicElement.classList.add('topic');

            const statusBox = document.createElement('div');
            statusBox.classList.add('topic-status');
            if (topic.written) {
                statusBox.classList.add('written');
            }

            const topicType = document.createElement('span');
            topicType.classList.add('topic-type');
            topicType.textContent = topic.tabName;

            const text = document.createElement('p');
            text.textContent = topic.text;

            const topicButtons = document.createElement('div');
            topicButtons.classList.add('topic-buttons');

            const viewButton = document.createElement('button');
            viewButton.textContent = 'Show answer';
            viewButton.onclick = function() {
                // TODO: Xử lý khi nhấn nút Show answer
            };

            const writeButton = document.createElement('button');
            writeButton.textContent = 'Write on this topic';
            writeButton.onclick = function() {
                topic.written = true; // Mark the topic as written
                renderTopics(currentTab, allTopics); // Re-render topics to reflect the change
            };

            topicButtons.appendChild(viewButton);
            topicButtons.appendChild(writeButton);

            topicElement.appendChild(statusBox);
            topicElement.appendChild(topicType);
            topicElement.appendChild(text);
            topicElement.appendChild(topicButtons);
            topicContainer.appendChild(topicElement);
        });

        // Mark the active tab
        tabButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.tab-button[data-tab="${currentTab}"]`).classList.add('active');
    }

});
