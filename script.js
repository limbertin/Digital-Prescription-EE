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
        "Natural Care Four", "Refresh Energy"
    ];

    const logoMap = {
        "Microclear Energy": "Micro-Clear-Energy.Png",
        "Natural Care Four": "Natural-Care-Four.png",
        "Life Energy": "Life-Energy.Png",
        "Refresh Energy": "Refresh-Energy.png"
    };

    const productLinks = {
        "Life Energy": "https://www.essentialenergy.com.br/essencias/life-energy-30ml",
        "Imuno Energy": "https://www.essentialenergy.com.br/essencias/imuno-energy-30ml",
        "Balance Energy": "https://www.essentialenergy.com.br/essencias/balance-energy-30ml",
        "Brain Energy": "https://www.essentialenergy.com.br/essencias/brain-energy-30ml",
        "Circulatory Energy": "https://www.essentialenergy.com.br/essencias/circulatory-energy-30ml",
        "Harmony Energy": "https://www.essentialenergy.com.br/essencias/harmony-energy-30ml",
        "Digest Energy": "https://www.essentialenergy.com.br/essencias/digest-energy-30ml",
        "Pancreatic Energy": "https://www.essentialenergy.com.br/essencias/pancreatic-energy-30ml",
        "Cardio Energy": "https://www.essentialenergy.com.br/essencias/cardio-energy-30ml",
        "Microclear Energy": "https://www.essentialenergy.com.br/essencias/micro-clear-energy-30ml",
        "Wellness Energy": "https://www.essentialenergy.com.br/essencias/wellness-energy-30ml",
        "Chakras Energy": "https://www.essentialenergy.com.br/essencias/chakras-energy-30ml",
        "Dental Energy": "https://www.essentialenergy.com.br/essencias/dental-energy-30ml",
        "Renew Energy": "https://www.essentialenergy.com.br/essencias/renew-energy-30ml",
        "Intestinal Energy": "https://www.essentialenergy.com.br/essencias/intestinal-energy-30ml",
        "Quantum Energy": "https://www.essentialenergy.com.br/essencias/quantum-energy-30ml",
        "Respiratory Energy": "https://www.essentialenergy.com.br/essencias/respiratory-energy-30ml",
        "Night Energy": "https://www.essentialenergy.com.br/essencias/night-energy-30ml",
        "Natural Energy": "https://www.essentialenergy.com.br/essencias/natural-energy-30ml",
        "Body Energy": "https://www.essentialenergy.com.br/essencias/body-energy-30ml",
        "Urinary Energy": "https://www.essentialenergy.com.br/essencias/urinary-energy-30ml",
        "Restore Energy": "https://www.essentialenergy.com.br/essencias/restore-energy-30ml",
        "Female Energy": "https://www.essentialenergy.com.br/essencias/female-energy-30ml",
        "Male Energy": "https://www.essentialenergy.com.br/essencias/male-energy-30ml",
        "Organs Energy": "https://www.essentialenergy.com.br/essencias/organs-energy-30ml",
        "Protection Energy": "https://www.essentialenergy.com.br/essencias/protection-energy-30ml",
        "Fast Energy": "https://www.essentialenergy.com.br/essencias/fast-energy-30ml",
        "Booster Energy": "https://www.essentialenergy.com.br/essencias/booster-energy-30ml",
        "Shield Energy": "https://www.essentialenergy.com.br/essencias/shield-energy-30ml",
        "Vital Energy": "https://www.essentialenergy.com.br/essencias/vital-energy-30ml",
        "Innova Energy": "https://www.essentialenergy.com.br/essencias/innova-energy-30ml",
        "Bio Energy": "https://www.essentialenergy.com.br/essencias/bio-energy-30ml",
        "Pure Energy": "https://www.essentialenergy.com.br/essencias/pure-energy-30ml",
        "Herbs Energy": "https://www.essentialenergy.com.br/essencias/herbs-energy-30ml",
        "Guardian Energy": "https://www.essentialenergy.com.br/essencias/guardian-energy-30ml",
        "Optimum Energy": "https://www.essentialenergy.com.br/essencias/optimun-energy-30ml",
        "Human Energy": "https://www.essentialenergy.com.br/essencias/human-energy-30ml",
        "Pleasant Energy": "https://www.essentialenergy.com.br/essencias/pleasant-energy-15ml",
        "Defense Energy": "https://www.essentialenergy.com.br/essencias/defense-energy-30ml",
        "Extreme Energy": "https://www.essentialenergy.com.br/essencias/extreme-energy-30ml",
        "Natural Care Four": "https://www.essentialenergy.com.br/essencias-naturais/natural-care-four-10ml",
        "Refresh Energy": "https://www.essentialenergy.com.br/essencias/refresh-energy-30ml"
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
    let patientData = {
        name: '',
        phone: '',
        date: new Date().toISOString().split('T')[0]
    };

    // Patient Modal Elements
    const patientModal = document.getElementById('patient-modal');
    const patientTrigger = document.getElementById('patient-trigger');
    const patientNameDisplay = document.getElementById('patient-name-display');
    const inputPatientName = document.getElementById('input-patient-name');
    const inputPatientPhone = document.getElementById('input-patient-phone');
    const inputPrescriptionDate = document.getElementById('input-prescription-date');
    const btnSavePatient = document.getElementById('btn-save-patient');
    const btnCancelPatient = document.getElementById('btn-cancel-patient');

    // --- Core Logic ---

    function getLogo(name) {
        if (logoMap[name]) return logoMap[name];
        return name.replace(/ /g, "-") + ".Png";
    }

    function renderProducts(filter = '') {
        productsGrid.innerHTML = '';
        const filtered = products.filter(p => p.toLowerCase().includes(filter.toLowerCase()));

        filtered.forEach((name, index) => {
            const isActive = selectedProducts.has(name);
            const cardData = selectedProducts.get(name);
            const card = document.createElement('div');

            // Highlight first result if searching
            const isFirstMatch = filter && index === 0;
            card.className = `product-card ${isActive ? 'active' : 'dormant'} ${isFirstMatch ? 'search-highlight' : ''}`;

            card.innerHTML = `
                <div class="product-logo-container">
                    <div class="logo-glow"></div>
                    <img src="Logos-produtos-EE/${getLogo(name)}" alt="${name}" class="product-logo" onerror="this.src='Logos-produtos-EE/Essential-Energy-Logo.Png'">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${name}</h3>
                    <p class="product-type">${isActive ? (cardData.isComplex ? `${cardData.spray} kit / ${cardData.days} dias` : `${cardData.spray} frascos / ${cardData.dosage} borrifadas`) : ''}</p>
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

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const firstCard = productsGrid.querySelector('.product-card');
            if (firstCard) {
                const productName = firstCard.querySelector('.product-name').textContent;
                openDosageModal(productName);
            }
        }
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
                closeDosageModalAndFocusSearch();
            } else if (patientModal.classList.contains('active')) {
                patientModal.classList.remove('active');
            } else if (searchInput.value) {
                searchInput.value = '';
                renderProducts('');
                clearSearch.style.display = 'none';
            }
        }
    });

    // --- Patient Information Logic ---

    patientTrigger.onclick = () => {
        inputPatientName.value = patientData.name;
        inputPatientPhone.value = patientData.phone;
        inputPrescriptionDate.value = patientData.date;
        patientModal.classList.add('active');
    };

    btnCancelPatient.onclick = () => {
        patientModal.classList.remove('active');
    };

    btnSavePatient.onclick = () => {
        patientData.name = inputPatientName.value;
        patientData.phone = inputPatientPhone.value;
        patientData.date = inputPrescriptionDate.value;

        patientNameDisplay.textContent = patientData.name || 'Clique para preencher';
        patientModal.classList.remove('active');
    };

    // --- Modal Logic ---

    function openDosageModal(name) {
        currentProductEditing = name;
        modalProductName.textContent = name;
        modalLogo.src = `Logos-produtos-EE/${getLogo(name)}`;

        const cardContent = document.querySelector('.card-content-dosage');
        const modalSize = document.querySelector('.product-name-dosage .size');

        if (name === "Natural Care Four") {
            modalSize.textContent = "'10ml cada'";
            renderNaturalCareFour(cardContent);
        } else {
            modalSize.textContent = "30ML";
            renderStandardDosage(cardContent);
        }

        const existing = selectedProducts.get(name);

        if (name === "Natural Care Four") {
            const data = existing || { spray: "1", days: "7", care1: "3", care2: "3", care3: "3", care4: "3" };
            setupChipSelection('spray', data.spray);
            setupChipSelection('days', data.days);
            setupChipSelection('care1', data.care1);
            setupChipSelection('care2', data.care2);
            setupChipSelection('care3', data.care3);
            setupChipSelection('care4', data.care4);
        } else {
            const data = existing || { spray: "1", dosage: "4" };
            setupChipSelection('spray', data.spray);
            setupChipSelection('dosage', data.dosage);
        }

        dosageModal.classList.add('active');

        // Auto-focus confirm button to allow instant Enter
        setTimeout(() => {
            btnConfirmDosage.focus();
        }, 50);
    }

    function closeDosageModalAndFocusSearch() {
        dosageModal.classList.remove('active');
        setTimeout(() => {
            searchInput.focus();
            searchInput.select();
        }, 100);
    }

    function renderStandardDosage(container) {
        container.innerHTML = `
            <div class="input-group" id="group-spray">
                <label class="group-label">Frascos spray</label>
                <div class="chip-container" data-field="spray">
                    <button class="chip common" data-value="1">1 <small>mais comum</small></button>
                    <button class="chip" data-value="2">2</button>
                    <button class="chip" data-value="3">3</button>
                    <button class="chip" data-value="4">4</button>
                    <button class="chip custom-trigger">&plusmn;</button>
                    <div class="custom-input-wrapper hidden">
                        <button class="btn-step minus">&minus;</button>
                        <span class="step-value">5</span>
                        <button class="btn-step plus">&plus;</button>
                        <button class="btn-confirm-custom">OK</button>
                    </div>
                </div>
            </div>

            <div class="input-group" id="group-dosage">
                <label class="group-label">Borrifar ___ vezes</label>
                <div class="chip-container" data-field="dosage">
                    <button class="chip common" data-value="3">3 <small>mais comum</small></button>
                    <button class="chip common" data-value="4">4 <small>mais comum</small></button>
                    <button class="chip" data-value="5">5</button>
                    <button class="chip" data-value="6">6</button>
                    <button class="chip custom-trigger">&plusmn;</button>
                    <div class="custom-input-wrapper hidden">
                        <button class="btn-step minus">&minus;</button>
                        <span class="step-value">8</span>
                        <button class="btn-step plus">&plus;</button>
                        <button class="btn-confirm-custom">OK</button>
                    </div>
                </div>
            </div>

            <div class="fixed-instruction">
                <p>4 vezes ao dia, por 7 dias.</p>
            </div>
        `;
    }

    function renderNaturalCareFour(container) {
        container.innerHTML = `
            <div class="input-group">
                <h3>FRASCOS SPRAY</h3>
                <div class="chip-container" data-field="spray">
                    <button class="chip" data-value="1">1</button>
                    <button class="chip" data-value="2">2</button>
                    <button class="chip" data-value="3">3</button>
                    <button class="chip" data-value="4">4</button>
                    <button class="chip custom-trigger">&plusmn;</button>
                    <div class="custom-input-wrapper hidden">
                        <button class="btn-step minus">&minus;</button>
                        <span class="step-value">5</span>
                        <button class="btn-step plus">&plus;</button>
                        <button class="btn-confirm-custom">OK</button>
                    </div>
                </div>
            </div>

            <div class="input-group">
                <h3>DIAS</h3>
                <div class="chip-container" data-field="days">
                    <button class="chip" data-value="5">5</button>
                    <button class="chip" data-value="7">7</button>
                </div>
            </div>

            ${[1, 2, 3, 4].map(num => `
                <div class="care-section">
                    <h2>Care ${num}</h2>
                    <h3>BORRIFAR ___ VEZES</h3>
                    <label class="care-label">Care ${num} : Borrifar ____ x VO,</label>
                    <div class="chip-container" data-field="care${num}">
                        <button class="chip" data-value="1">1</button>
                        <button class="chip" data-value="2">2</button>
                        <button class="chip" data-value="3">3</button>
                        <button class="chip" data-value="4">4</button>
                        <button class="chip custom-trigger">&plusmn;</button>
                        <div class="custom-input-wrapper hidden">
                            <button class="btn-step minus">&minus;</button>
                            <span class="step-value">5</span>
                            <button class="btn-step plus">&plus;</button>
                            <button class="btn-confirm-custom">OK</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
    }

    function setupChipSelection(field, initialValue) {
        const container = document.querySelector(`.chip-container[data-field="${field}"]`);
        const chips = container.querySelectorAll('.chip:not(.custom-trigger)');
        const customTrigger = container.querySelector('.custom-trigger');
        const customWrapper = container.querySelector('.custom-input-wrapper');
        const stepValueDisplay = container.querySelector('.step-value');

        // Reset state (only if elements exist)
        if (customTrigger) customTrigger.classList.remove('hidden');
        if (customWrapper) customWrapper.classList.add('hidden');
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
                if (customTrigger) customTrigger.classList.remove('hidden');
                if (customWrapper) customWrapper.classList.add('hidden');
            };
        });

        if (!matched && initialValue && customTrigger && customWrapper && stepValueDisplay) {
            customTrigger.classList.add('hidden');
            customWrapper.classList.remove('hidden');
            stepValueDisplay.textContent = initialValue;
        }

        if (customTrigger && customWrapper) {
            customTrigger.onclick = () => {
                customTrigger.classList.add('hidden');
                customWrapper.classList.remove('hidden');
                chips.forEach(c => c.classList.remove('active'));
            };
        }

        const plusBtn = container.querySelector('.plus');
        const minusBtn = container.querySelector('.minus');
        const confirmBtn = container.querySelector('.btn-confirm-custom');

        if (plusBtn && stepValueDisplay) {
            plusBtn.onclick = () => {
                stepValueDisplay.textContent = parseInt(stepValueDisplay.textContent) + 1;
            };
        }
        if (minusBtn && stepValueDisplay) {
            minusBtn.onclick = () => {
                const val = parseInt(stepValueDisplay.textContent);
                if (val > 1) stepValueDisplay.textContent = val - 1;
            };
        }
        if (confirmBtn) {
            confirmBtn.onclick = () => {
                // Visual feedback only, value is read on Confirm Selection
            };
        }
    }

    btnConfirmDosage.onclick = () => {
        let data;
        if (currentProductEditing === "Natural Care Four") {
            data = {
                spray: getSelectedValue('spray'),
                days: getSelectedValue('days'),
                care1: getSelectedValue('care1'),
                care2: getSelectedValue('care2'),
                care3: getSelectedValue('care3'),
                care4: getSelectedValue('care4'),
                isComplex: true
            };
        } else {
            data = {
                spray: getSelectedValue('spray'),
                dosage: getSelectedValue('dosage')
            };
        }

        selectedProducts.set(currentProductEditing, data);
        closeDosageModalAndFocusSearch();
        updateUI();
    };

    function getSelectedValue(field) {
        const container = document.querySelector(`.chip-container[data-field="${field}"]`);
        const activeChip = container.querySelector('.chip.active');
        if (activeChip) return activeChip.dataset.value;
        return container.querySelector('.step-value').textContent;
    }

    btnCancelDosage.onclick = () => {
        closeDosageModalAndFocusSearch();
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

                let detailText;
                if (data.isComplex) {
                    detailText = `${data.spray} kit | ${data.days} dias`;
                } else {
                    detailText = `${data.spray} frascos | ${data.dosage} borrifadas`;
                }

                item.innerHTML = `
                    <div style="cursor:pointer;" onclick="window.openDosageFromSidebar('${name}')">
                        <strong style="display:block; font-size:0.9rem; color:#f8fafc;">${name}</strong>
                        <span style="font-size:0.8rem; color:#94a3b8;">${detailText}</span>
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

    // --- Prescription Generation Logic ---

    const prescriptionModal = document.getElementById('prescription-modal');
    const displayPatientName = document.getElementById('display-patient-name');
    const displayPatientPhone = document.getElementById('display-patient-phone');
    const displayDate = document.getElementById('display-date');
    const prescriptionItemsList = document.getElementById('prescription-items-list');
    const btnClosePrescription = document.getElementById('btn-close-prescription');
    const btnPrint = document.getElementById('btn-print');
    const btnWhatsapp = document.getElementById('btn-whatsapp');

    function generatePrescription() {
        displayPatientName.textContent = patientData.name || 'Não informado';
        displayPatientPhone.textContent = patientData.phone ? `Telefone: ${patientData.phone}` : '';

        // Format date: dd/mm/yyyy
        const [year, month, day] = patientData.date.split('-');
        displayDate.textContent = `Data: ${day}/${month}/${year}`;

        prescriptionItemsList.innerHTML = '';

        selectedProducts.forEach((data, name) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'prescribed-item-card';

            let posology;
            if (data.isComplex) {
                posology = `
                    <div class="item-posology">
                        <p>• ${data.spray} kit completo</p>
                        <p>• Duração: ${data.days} dias</p>
                        <div style="font-size: 0.8rem; margin-top: 8px;">
                            Posologia Individual:<br>
                            Care 1: ${data.care1} borrifadas, V.O. | Care 2: ${data.care2} borrifadas, V.O.<br>
                            Care 3: ${data.care3} borrifadas, V.O. | Care 4: ${data.care4} borrifadas, V.O.
                        </div>
                    </div>
                `;
            } else {
                posology = `
                    <div class="item-posology">
                        <p>Borrifar ${data.dosage} vezes, V.O., 4x ao dia, por 7 dias</p>
                    </div>
                `;
            }

            const storeUrl = productLinks[name] || 'https://www.essentialenergy.com.br';

            itemCard.innerHTML = `
                <img src="Logos-produtos-EE/${getLogo(name)}" alt="${name}" class="item-logo-small">
                <div class="item-details">
                    <div class="item-header-row">
                        <h4>${name}</h4>
                        <span class="item-underline"></span>
                        <span style="font-size: 0.9rem;">${data.spray} ${data.isComplex ? 'kit' : 'frasco(s) spray'}</span>
                    </div>
                    ${posology}
                </div>
                <a href="${storeUrl}" target="_blank" class="btn-buy">🛒 Comprar</a>
            `;
            prescriptionItemsList.appendChild(itemCard);
        });

        prescriptionModal.classList.add('active');
    }

    btnSubmit.addEventListener('click', () => {
        if (!patientData.name) {
            if (confirm('O nome do paciente não foi preenchido. Deseja preencher agora?')) {
                patientTrigger.click();
                return;
            }
        }
        generatePrescription();
    });

    btnClosePrescription.onclick = () => {
        prescriptionModal.classList.remove('active');
    };

    btnPrint.onclick = () => {
        window.print();
    };

    btnWhatsapp.onclick = () => {
        let text = `*RECEITUÁRIO DIGITAL - ESSENTIAL ENERGY*\n\n`;
        text += `*Paciente:* ${patientData.name || 'Não informado'}\n`;
        text += `*Data:* ${displayDate.textContent.split(': ')[1]}\n\n`;
        text += `--- *ITENS PRESCRITOS* ---\n\n`;

        selectedProducts.forEach((data, name) => {
            text += `*${name}* ---- ${data.spray} ${data.isComplex ? 'kit' : 'frasco(s)'}\n`;
            if (data.isComplex) {
                text += `  • Duração: ${data.days} dias\n`;
                text += `  • Care 1: ${data.care1} x V.O. | Care 2: ${data.care2} x V.O.\n`;
                text += `  • Care 3: ${data.care3} x V.O. | Care 4: ${data.care4} x V.O.\n`;
            } else {
                text += `  • Borrifar ${data.dosage} vezes, V.O., 4x ao dia, por 7 dias\n`;
            }
            text += `  Compre aqui: ${productLinks[name] || 'Site Oficial'}\n\n`;
        });

        text += `\n`; // Empty area as requested

        const encodedText = encodeURIComponent(text);
        const phone = patientData.phone.replace(/\D/g, '');
        const waUrl = `https://wa.me/${phone}?text=${encodedText}`;
        window.open(waUrl, '_blank');
    };

    renderProducts();
});
