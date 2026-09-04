fetch('data.json')
    .then(response => {
        if (!response.ok) throw new Error('Erro na requisição');
        return response.json();
    })
    .then(subjects => {
        const container = document.getElementById('subjects-card-container');
        
        if (!container) return; 

        subjects.forEach(subject => {
            const card = document.createElement('div');
            card.classList.add('subject-card');
            

            const categoryClass = subject.category.toLowerCase();
            card.classList.add(categoryClass);

            card.innerHTML = ` 
                <div class="subject-title">
                    <img src="${subject.icon}" alt="${subject.category} icon">
                    <h4>${subject.category}</h4>
                </div>
                <div class="subject-scores">
                    <strong>${subject.score}</strong> <span>/ 100</span>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error while loading cards: ', error));
