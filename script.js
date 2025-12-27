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
    };

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const sidebarList = document.getElementById('sidebar-list');
    const selectedCount = document.getElementById('selected-count');
    const btnSubmit = document.getElementById('btn-submit');
    const btnReset = document.getElementById('btn-reset');
    const searchInput = document.getElementById('search-input');

    // Modal Elements
    const dosageModal = document.getElementById('dosage-modal');
    const modalProductName = document.getElementById('modal-product-name');
    const modalLogo = document.getElementById('modal-logo');
    const btnConfirmDosage = document.getElementById('btn-confirm-dosage');
    const btnCancelDosage = document.getElementById('btn-cancel-dosage');

    let selectedProducts = new Map(); // name -> { spray, dosage }
    let currentProductEditing = null;

    // --- Core Logic ---

    function getLogo(name) {
        if (logoMap[name]) return logoMap[name];
        return name.replace(/ /g, "-") + ".Png";
    }

    function renderProducts(filter = '') {
        productsGrid.innerHTML = '';
        const filtered = products.filter(p => p.toLowerCase().includes(filter.toLowerCase()));

        filtered.forEach(name => {
            const isActive = selectedProducts.has(name);
            const cardData = selectedProducts.get(name);
            const card = document.createElement('div');
            card.className = `product-card ${isActive ? 'active' : 'dormant'}`;

            card.innerHTML = `
                <div class="product-logo-container">
                    <div class="logo-glow"></div>
                    <img src="Logos-produtos-EE/${getLogo(name)}" alt="${name}" class="product-logo" onerror="this.src='Logos-produtos-EE/Essential-Energy-Logo.Png'">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${name}</h3>
                    <p class="product-type">${isActive ? `${cardData.spray} frascos / ${cardData.dosage} doses` : 'Frequencial Floral'}</p>
                </div>
            `;

            card.addEventListener('click', () => openDosageModal(name));
            productsGrid.appendChild(card);
        });
    }

    // Modulo de Busca
    const clearSearch = document.getElementById('clear-search');

    searchInput.addEventListener('input', (e) => {
        renderProducts(e.target.value);
        clearSearch.style.display = e.target.value ? 'block' : 'none';
    });

    clearSearch.onclick = () => {
        searchInput.value = '';
        renderProducts('');
        clearSearch.style.display = 'none';
        searchInput.focus();
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (dosageModal.classList.contains('active')) {
                dosageModal.classList.remove('active');
            } else if (searchInput.value) {
                searchInput.value = '';
                renderProducts('');
                clearSearch.style.display = 'none';
            }
        }
    });

    // --- Modal Logic ---

    function openDosageModal(name) {
        currentProductEditing = name;
        modalProductName.textContent = name;
        modalLogo.src = `Logos-produtos-EE/${getLogo(name)}`;

        // Reset modal to default or existing values
        const existing = selectedProducts.get(name);
        setupChipSelection('spray', existing ? existing.spray : "1");
        setupChipSelection('dosage', existing ? existing.dosage : "4");

        dosageModal.classList.add('active');
    }

    function setupChipSelection(field, initialValue) {
        const container = document.querySelector(`.chip-container[data-field="${field}"]`);
        const chips = container.querySelectorAll('.chip:not(.custom-trigger)');
        const customTrigger = container.querySelector('.custom-trigger');
        const customWrapper = container.querySelector('.custom-input-wrapper');
        const stepValueDisplay = container.querySelector('.step-value');

        // Reset state
        customTrigger.classList.remove('hidden');
        customWrapper.classList.add('hidden');
        chips.forEach(c => c.classList.remove('active'));

        let matched = false;
        chips.forEach(chip => {
            if (chip.dataset.value === String(initialValue)) {
                chip.classList.add('active');
                matched = true;
            }
            // Simple click listener (re-attached)
            chip.onclick = () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                customTrigger.classList.remove('hidden');
                customWrapper.classList.add('hidden');
            };
        });

        if (!matched && initialValue) {
            customTrigger.classList.add('hidden');
            customWrapper.classList.remove('hidden');
            stepValueDisplay.textContent = initialValue;
        }

        customTrigger.onclick = () => {
            customTrigger.classList.add('hidden');
            customWrapper.classList.remove('hidden');
            chips.forEach(c => c.classList.remove('active'));
        };

        container.querySelector('.plus').onclick = () => {
            stepValueDisplay.textContent = parseInt(stepValueDisplay.textContent) + 1;
        };
        container.querySelector('.minus').onclick = () => {
            const val = parseInt(stepValueDisplay.textContent);
            if (val > 1) stepValueDisplay.textContent = val - 1;
        };
        container.querySelector('.btn-confirm-custom').onclick = () => {
            // Visual feedback only, value is read on Confirm Selection
        };
    }

    btnConfirmDosage.onclick = () => {
        const spray = getSelectedValue('spray');
        const dosage = getSelectedValue('dosage');

        selectedProducts.set(currentProductEditing, { spray, dosage });
        dosageModal.classList.remove('active');
        updateUI();
    };

    function getSelectedValue(field) {
        const container = document.querySelector(`.chip-container[data-field="${field}"]`);
        const activeChip = container.querySelector('.chip.active');
        if (activeChip) return activeChip.dataset.value;
        return container.querySelector('.step-value').textContent;
    }

    btnCancelDosage.onclick = () => {
        dosageModal.classList.remove('active');
    };

    // --- Sidebar & General UI ---

    function updateUI() {
        sidebarList.innerHTML = '';
        if (selectedProducts.size === 0) {
            sidebarList.innerHTML = '<p class="empty-state">Nenhuma essência selecionada</p>';
            btnSubmit.disabled = true;
            btnSubmit.classList.add('disabled');
        } else {
            selectedProducts.forEach((data, name) => {
                const item = document.createElement('div');
                item.className = 'selected-item';
                item.style = "padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;";
                item.innerHTML = `
                    <div style="cursor:pointer;" onclick="window.openDosageFromSidebar('${name}')">
                        <strong style="display:block; font-size:0.9rem; color:#f8fafc;">${name}</strong>
                        <span style="font-size:0.8rem; color:#94a3b8;">${data.spray} frascos | ${data.dosage} doses</span>
                    </div>
                    <button class="remove-btn" onclick="window.removeProductFromSidebar('${name}')" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:1.5rem; line-height:1;">&times;</button>
                `;
                sidebarList.appendChild(item);
            });
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('disabled');
        }

        selectedCount.textContent = selectedProducts.size;
        renderProducts(searchInput.value);
    }

    // Exposed for inline onclicks
    window.removeProductFromSidebar = (name) => {
        selectedProducts.delete(name);
        updateUI();
    };

    window.openDosageFromSidebar = (name) => {
        openDosageModal(name);
    };

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
