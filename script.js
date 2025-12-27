document.addEventListener('DOMContentLoaded', () => {
    const products = [
        "Life Energy", "Imuno Energy", "Balance Energy", "Brain Energy", "Circulatory Energy",
        "Harmony Energy", "Digest Energy", "Pancreatic Energy", "Cardio Energy", "Microclear Energy",
        "Wellness Energy", "Chakras Energy", "Dental Energy", "Renew Energy", "Intestinal Energy",
        "Quantum Energy", "Respiratory Energy", "Night Energy", "Natural Energy", "Body Energy",
        "Urinary Energy", "Restore Energy", "Female Energy", "Male Energy", "Organs Energy",
        "Protection Energy", "Fast Energy", "Booster Energy", "Shield Energy", "Vital Energy",
        "Innova Energy", "Bio Energy", "Pure Energy", "Herbs Energy", "Guardian Energy",
        "Optimum Energy", "Human Energy", "Pleasant Energy", "Defense Energy", "Extreme Energy",
        "Natural Care 4", "Refresh Energy"
    ];

    const logoMap = {
        "Microclear Energy": "Micro-Clear-Energy.Png",
        "Natural Care 4": "Natural-Care-Four.png",
        "Life Energy": "Life-Energy.Png",
        "Refresh Energy": "Refresh-Energy.png"
        // Most others follow "Name-Energy.Png"
    };

    const productsGrid = document.getElementById('products-grid');
    const sidebarList = document.getElementById('sidebar-list');
    const selectedCount = document.getElementById('selected-count');
    const btnSubmit = document.getElementById('btn-submit');
    const btnReset = document.getElementById('btn-reset');
    const searchInput = document.getElementById('search-input');

    let selectedProducts = new Map();

    function getLogo(name) {
        if (logoMap[name]) return logoMap[name];
        return name.replace(" ", "-") + ".Png";
    }

    function renderProducts(filter = '') {
        productsGrid.innerHTML = '';
        const filtered = products.filter(p => p.toLowerCase().includes(filter.toLowerCase()));

        filtered.forEach(name => {
            const isActive = selectedProducts.has(name);
            const card = document.createElement('div');
            card.className = `product-card ${isActive ? 'active' : 'dormant'}`;
            
            card.innerHTML = `
                <div class="product-logo-container">
                    <div class="logo-glow"></div>
                    <img src="Logos-produtos-EE/${getLogo(name)}" alt="${name}" class="product-logo" onerror="this.src='Logos-produtos-EE/Essential-Energy-Logo.Png'">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${name}</h3>
                    <p class="product-type">${isActive ? 'Dosagem: ' + selectedProducts.get(name) : 'Frequencial Floral'}</p>
                </div>
            `;
            
            card.addEventListener('click', () => {
                if (isActive) {
                    removeProduct(name);
                } else {
                    const dosage = prompt(`Defina a dosagem para ${name} (1 a 4+):`, "1");
                    if (dosage) addProduct(name, dosage);
                }
            });
            
            productsGrid.appendChild(card);
        });
    }

    function addProduct(name, dosage) {
        selectedProducts.set(name, dosage);
        updateUI();
    }

    function removeProduct(name) {
        selectedProducts.delete(name);
        updateUI();
    }

    function updateUI() {
        sidebarList.innerHTML = '';
        if (selectedProducts.size === 0) {
            sidebarList.innerHTML = '<p class="empty-state">Nenhuma essência selecionada</p>';
            btnSubmit.disabled = true;
            btnSubmit.classList.add('disabled');
        } else {
            selectedProducts.forEach((dosage, name) => {
                const item = document.createElement('div');
                item.className = 'selected-item';
                item.style.padding = '12px';
                item.style.background = 'rgba(255,255,255,0.05)';
                item.style.border = '1px solid rgba(255,255,255,0.1)';
                item.style.borderRadius = '12px';
                item.style.marginBottom = '12px';
                item.style.display = 'flex';
                item.style.justifyContent = 'space-between';
                item.style.alignItems = 'center';
                item.style.animation = 'slideIn 0.3s ease-out';
                item.innerHTML = `
                    <div>
                        <strong style="display:block; font-size:0.9rem; color:#f8fafc;">${name}</strong>
                        <span style="font-size:0.8rem; color:#94a3b8;">${dosage} doses/dia</span>
                    </div>
                    <button class="remove-btn" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:1.5rem; line-height:1;">&times;</button>
                `;
                item.querySelector('.remove-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    removeProduct(name);
                });
                sidebarList.appendChild(item);
            });
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('disabled');
        }

        selectedCount.textContent = selectedProducts.size;
        renderProducts(searchInput.value);
    }

    searchInput.addEventListener('input', (e) => {
        renderProducts(e.target.value);
    });

    btnReset.addEventListener('click', () => {
        if (confirm('Limpar todas as seleções?')) {
            selectedProducts.clear();
            updateUI();
        }
    });

    btnSubmit.addEventListener('click', () => {
        alert('Gerando Receituário com ' + selectedProducts.size + ' produtos...');
    });

    renderProducts();
});
