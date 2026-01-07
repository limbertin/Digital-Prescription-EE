document.addEventListener('DOMContentLoaded', () => {
    const products = [
        "1. Life Energy", "2. Imuno Energy", "3. Balance Energy", "4. Brain Energy", "5. Circulatory Energy",
        "6. Harmony Energy", "7. Digest Energy", "8. Pancreatic Energy", "9. Cardio Energy", "10. Microclear Energy",
        "11. Wellness Energy", "12. Chakras Energy", "13. Dental Energy", "14. Renew Energy", "15. Intestinal Energy",
        "16. Quantum Energy", "17. Respiratory Energy", "18. Night Energy", "19. Natural Energy", "20. Body Energy",
        "21. Urinary Energy", "22. Restore Energy", "23. Female Energy", "24. Male Energy", "25. Organs Energy",
        "26. Protection Energy", "27. Fast Energy", "28. Booster Energy", "29. Shield Energy", "30. Vital Energy",
        "31. Innova Energy", "32. Bio Energy", "33. Pure Energy", "34. Herbs Energy", "35. Guardian Energy",
        "36. Optimum Energy", "37. Human Energy", "38. Pleasant Energy", "39. Defense Energy", "40. Extreme Energy",
        "41. Natural Care Four", "42. Refresh Energy"
    ];

    const logoMap = {
        "10. Microclear Energy": "Micro-Clear-Energy.jpg",
        "41. Natural Care Four": "Natural-Care-Four.jpg",
        "1. Life Energy": "Life-Energy.jpg",
        "42. Refresh Energy": "Refresh-Energy.jpg"
    };

    const productLinks = {
        "1. Life Energy": "https://www.essentialenergy.com.br/essencias/life-energy-30ml",
        "2. Imuno Energy": "https://www.essentialenergy.com.br/essencias/imuno-energy-30ml",
        "3. Balance Energy": "https://www.essentialenergy.com.br/essencias/balance-energy-30ml",
        "4. Brain Energy": "https://www.essentialenergy.com.br/essencias/brain-energy-30ml",
        "5. Circulatory Energy": "https://www.essentialenergy.com.br/essencias/circulatory-energy-30ml",
        "6. Harmony Energy": "https://www.essentialenergy.com.br/essencias/harmony-energy-30ml",
        "7. Digest Energy": "https://www.essentialenergy.com.br/essencias/digest-energy-30ml",
        "8. Pancreatic Energy": "https://www.essentialenergy.com.br/essencias/pancreatic-energy-30ml",
        "9. Cardio Energy": "https://www.essentialenergy.com.br/essencias/cardio-energy-30ml",
        "10. Microclear Energy": "https://www.essentialenergy.com.br/essencias/micro-clear-energy-30ml",
        "11. Wellness Energy": "https://www.essentialenergy.com.br/essencias/wellness-energy-30ml",
        "12. Chakras Energy": "https://www.essentialenergy.com.br/essencias/chakras-energy-30ml",
        "13. Dental Energy": "https://www.essentialenergy.com.br/essencias/dental-energy-30ml",
        "14. Renew Energy": "https://www.essentialenergy.com.br/essencias/renew-energy-30ml",
        "15. Intestinal Energy": "https://www.essentialenergy.com.br/essencias/intestinal-energy-30ml",
        "16. Quantum Energy": "https://www.essentialenergy.com.br/essencias/quantum-energy-30ml",
        "17. Respiratory Energy": "https://www.essentialenergy.com.br/essencias/respiratory-energy-30ml",
        "18. Night Energy": "https://www.essentialenergy.com.br/essencias/night-energy-30ml",
        "19. Natural Energy": "https://www.essentialenergy.com.br/essencias/natural-energy-30ml",
        "20. Body Energy": "https://www.essentialenergy.com.br/essencias/body-energy-30ml",
        "21. Urinary Energy": "https://www.essentialenergy.com.br/essencias/urinary-energy-30ml",
        "22. Restore Energy": "https://www.essentialenergy.com.br/essencias/restore-energy-30ml",
        "23. Female Energy": "https://www.essentialenergy.com.br/essencias/female-energy-30ml",
        "24. Male Energy": "https://www.essentialenergy.com.br/essencias/male-energy-30ml",
        "25. Organs Energy": "https://www.essentialenergy.com.br/essencias/organs-energy-30ml",
        "26. Protection Energy": "https://www.essentialenergy.com.br/essencias/protection-energy-30ml",
        "27. Fast Energy": "https://www.essentialenergy.com.br/essencias/fast-energy-30ml",
        "28. Booster Energy": "https://www.essentialenergy.com.br/essencias/booster-energy-30ml",
        "29. Shield Energy": "https://www.essentialenergy.com.br/essencias/shield-energy-30ml",
        "30. Vital Energy": "https://www.essentialenergy.com.br/essencias/vital-energy-30ml",
        "31. Innova Energy": "https://www.essentialenergy.com.br/essencias/innova-energy-30ml",
        "32. Bio Energy": "https://www.essentialenergy.com.br/essencias/bio-energy-30ml",
        "33. Pure Energy": "https://www.essentialenergy.com.br/essencias/pure-energy-30ml",
        "34. Herbs Energy": "https://www.essentialenergy.com.br/essencias/herbs-energy-30ml",
        "35. Guardian Energy": "https://www.essentialenergy.com.br/essencias/guardian-energy-30ml",
        "36. Optimum Energy": "https://www.essentialenergy.com.br/essencias/optimun-energy-30ml",
        "37. Human Energy": "https://www.essentialenergy.com.br/essencias/human-energy-30ml",
        "38. Pleasant Energy": "https://www.essentialenergy.com.br/essencias/pleasant-energy-15ml",
        "39. Defense Energy": "https://www.essentialenergy.com.br/essencias/defense-energy-30ml",
        "40. Extreme Energy": "https://www.essentialenergy.com.br/essencias/extreme-energy-30ml",
        "41. Natural Care Four": "https://www.essentialenergy.com.br/essencias-naturais/natural-care-four-10ml",
        "42. Refresh Energy": "https://www.essentialenergy.com.br/essencias/refresh-energy-30ml"
    };

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const sidebarList = document.getElementById('sidebar-list');
    const selectedCount = document.getElementById('selected-count');
    const btnSubmit = document.getElementById('btn-submit');
    const btnReset = document.getElementById('btn-reset');
    const searchInput = document.getElementById('search-input');
    const btnCopy = document.getElementById('btn-copy');

    // Initial Focus
    setTimeout(() => {
        searchInput.focus();
    }, 100);

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
        ddi: '55',
        date: new Date().toISOString().split('T')[0]
    };

    // Patient Modal Elements
    const patientModal = document.getElementById('patient-modal');
    const patientTrigger = document.getElementById('patient-trigger');
    const patientNameDisplay = document.getElementById('patient-name-display');
    const inputPatientName = document.getElementById('input-patient-name');
    const inputPatientDdi = document.getElementById('input-patient-ddi');
    const inputPatientPhone = document.getElementById('input-patient-phone');
    const inputPrescriptionDate = document.getElementById('input-prescription-date');
    const btnSavePatient = document.getElementById('btn-save-patient');
    const btnCancelPatient = document.getElementById('btn-cancel-patient');

    // --- Core Logic ---

    function pluralize(count, singular, plural) {
        return parseInt(count) === 1 ? singular : plural;
    }

    function getLogo(name) {
        if (logoMap[name]) return logoMap[name];
        // Remove a numeração do início (ex: "1. Life Energy" -> "Life Energy")
        const cleanName = name.replace(/^\d+\.\s*/, "");
        return cleanName.replace(/ /g, "-") + ".jpg";
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
                    <img src="Logos-produtos-EE/${getLogo(name)}" alt="${name}" class="product-logo" onerror="this.src='Logos-produtos-EE/Essential-Energy-Logo.jpg'">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${name}</h3>
                    <p class="product-type">${isActive ? (cardData.isComplex ? `${cardData.spray} ${pluralize(cardData.spray, 'kit', 'kits')} / ${cardData.days} dias` : `${cardData.spray} ${pluralize(cardData.spray, 'frasco', 'frascos')} / ${cardData.dosage} ${pluralize(cardData.dosage, 'borrifada', 'borrifadas')}`) : ''}</p>
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
            } else if (prescriptionModal.classList.contains('active')) {
                closePrescriptionModalAndFocusSearch();
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
        inputPatientDdi.value = patientData.ddi;
        inputPatientPhone.value = patientData.phone;
        inputPrescriptionDate.value = patientData.date;
        patientModal.classList.add('active');
    };

    btnCancelPatient.onclick = () => {
        patientModal.classList.remove('active');
    };

    btnSavePatient.onclick = () => {
        patientData.name = inputPatientName.value;
        patientData.ddi = inputPatientDdi.value;
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
            modalSize.textContent = "'10 ml'";
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

    function closePrescriptionModalAndFocusSearch() {
        prescriptionModal.classList.remove('active');
        setTimeout(() => {
            searchInput.focus();
            searchInput.select();
        }, 100);
    }

    function renderStandardDosage(container) {
        container.innerHTML = `
            <div class="input-group" id="group-spray">
                <label class="group-label">${pluralize(1, 'Frasco', 'Frascos')} spray</label>
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
                    </div>
                </div>
            </div>

            <div class="input-group" id="group-dosage">
                <label class="group-label">Borrifar ___ ${pluralize(2, 'vez', 'vezes')}</label>
                <div class="chip-container" data-field="dosage">
                    <button class="chip" data-value="1">1</button>
                    <button class="chip" data-value="2">2</button>
                    <button class="chip" data-value="3">3</button>
                    <button class="chip" data-value="4">4</button>
                    <button class="chip custom-trigger">&plusmn;</button>
                    <div class="custom-input-wrapper hidden">
                        <button class="btn-step minus">&minus;</button>
                        <span class="step-value">5</span>
                        <button class="btn-step plus">&plus;</button>
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
                <h3>${pluralize(2, 'FRASCO', 'FRASCOS')} SPRAY</h3>
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
                    <h3>BORRIFAR ___ ${pluralize(2, 'VEZ', 'VEZES')}</h3>
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
        if (customTrigger) {
            customTrigger.classList.remove('hidden');
            customTrigger.classList.remove('active');
        }
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
                if (customTrigger) {
                    customTrigger.classList.remove('hidden');
                    customTrigger.classList.remove('active');
                }
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
            // Ordenar produtos por número (ex: "1. Life Energy" -> 1)
            const sortedProducts = [...selectedProducts.entries()].sort((a, b) => {
                const numA = parseInt(a[0].match(/^\d+/)?.[0] || 0);
                const numB = parseInt(b[0].match(/^\d+/)?.[0] || 0);
                return numA - numB;
            });

            sortedProducts.forEach(([name, data]) => {
                const item = document.createElement('div');
                item.className = 'selected-item';
                item.style = "padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;";

                let detailText;
                if (data.isComplex) {
                    detailText = `${data.spray} ${pluralize(data.spray, 'kit', 'kits')} | ${data.days} dias`;
                } else {
                    detailText = `${data.spray} ${pluralize(data.spray, 'frasco', 'frascos')} | ${data.dosage} ${pluralize(data.dosage, 'borrifada', 'borrifadas')}`;
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
        const displayPhoneRow = document.getElementById('display-patient-phone-row');
        if (displayPhoneRow) {
            displayPhoneRow.textContent = patientData.phone ? ` - ${patientData.phone}` : '';
        }
        displayPatientPhone.textContent = patientData.phone ? `Telefone: ${patientData.phone}` : '';

        // Format date: dd/mm/yyyy
        const [year, month, day] = patientData.date.split('-');
        displayDate.textContent = `Data: ${day}/${month}/${year}`;

        prescriptionItemsList.innerHTML = '';

        // Ordenar produtos por número (ex: "1. Life Energy" -> 1)
        const sortedProducts = [...selectedProducts.entries()].sort((a, b) => {
            const numA = parseInt(a[0].match(/^\d+/)?.[0] || 0);
            const numB = parseInt(b[0].match(/^\d+/)?.[0] || 0);
            return numA - numB;
        });

        sortedProducts.forEach(([name, data]) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'prescribed-item-card';

            let posology;
            if (data.isComplex) {
                let careDetails = "";
                if (data.days === "7") {
                    careDetails = `
                        Care 1: Borrifar ${data.care1} ${pluralize(data.care1, 'vez', 'vezes')}, Via Oral, 4x ao dia na 1° semana<br>
                        Care 2: Borrifar ${data.care2} ${pluralize(data.care2, 'vez', 'vezes')}, Via Oral, 4x ao dia na 2° semana<br>
                        Care 3: Borrifar ${data.care3} ${pluralize(data.care3, 'vez', 'vezes')}, Via Oral, 4x ao dia na 3° semana<br>
                        Care 4: Borrifar ${data.care4} ${pluralize(data.care4, 'vez', 'vezes')}, Via Oral, 4x ao dia na 4° semana
                    `;
                } else {
                    careDetails = `
                        Care 1: Borrifar ${data.care1} ${pluralize(data.care1, 'vez', 'vezes')}, Via Oral, 4x ao dia, nos dias 1 ao 5<br>
                        Care 2: Borrifar ${data.care2} ${pluralize(data.care2, 'vez', 'vezes')}, Via Oral, 4x ao dia, nos dias 6 ao 10<br>
                        Care 3: Borrifar ${data.care3} ${pluralize(data.care3, 'vez', 'vezes')}, Via Oral, 4x ao dia, nos dias 11 ao 15<br>
                        Care 4: Borrifar ${data.care4} ${pluralize(data.care4, 'vez', 'vezes')}, Via Oral, 4x ao dia, nos dias 16 ao 20
                    `;
                }
                posology = `
                    <div class="item-posology">
                        <div style="font-size: 0.8rem; margin-top: 8px;">
                            ${careDetails}
                        </div>
                    </div>
                `;
            } else {
                posology = `
                    <div class="item-posology">
                        <p>Borrifar ${data.dosage} ${pluralize(data.dosage, 'vez', 'vezes')}, Via Oral, 4 vezes ao dia, por 7 dias</p>
                    </div>
                `;
            }

            const storeUrl = productLinks[name] || 'https://www.essentialenergy.com.br';

            itemCard.innerHTML = `
                <img src="Logos-produtos-EE/${getLogo(name)}" alt="${name}" class="item-logo-small">
                <div class="item-details">
                    <div class="item-header-row">
                        <div class="item-name-col"><h4>${name}</h4></div>
                        <div class="item-line-col"></div>
                        <div class="item-qty-col">${data.spray} ${data.isComplex ? pluralize(data.spray, 'kit', 'kits') : pluralize(data.spray, 'frasco', 'frascos') + ' spray'}</div>
                    </div>
                    ${posology}
                </div>
                <a href="${storeUrl}" target="_blank" class="btn-buy">🛒 Comprar</a>
            `;
            prescriptionItemsList.appendChild(itemCard);
        });

        prescriptionModal.classList.add('active');

        // Auto-focus Print button to allow instant Enter
        setTimeout(() => {
            btnPrint.focus();
        }, 50);
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
        closePrescriptionModalAndFocusSearch();
    };

    btnPrint.onclick = () => {
        window.print();
    };

    // Tab Loop Logic for Prescription Modal
    const modalActions = [btnPrint, btnWhatsapp, btnClosePrescription];
    modalActions.forEach((btn, index) => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Tab Backwards
                    if (document.activeElement === btnPrint) {
                        e.preventDefault();
                        btnClosePrescription.focus();
                    }
                } else { // Tab Forwards
                    if (document.activeElement === btnClosePrescription) {
                        e.preventDefault();
                        btnPrint.focus();
                    }
                }
            }
        });
    });

    btnWhatsapp.onclick = () => {
        let text = `*RECEITUÁRIO DIGITAL - ESSENTIAL ENERGY*\n\n`;
        text += `*Paciente:* ${patientData.name || 'Não informado'}\n`;
        text += `*Data:* ${displayDate.textContent.split(': ')[1]}\n\n`;
        const itemCount = selectedProducts.size;
        text += `--- *${itemCount} ${pluralize(itemCount, 'ITEM PRESCRITO', 'ITENS PRESCRITOS')}* ---\n\n`;

        // Ordenar produtos por número (ex: "1. Life Energy" -> 1)
        const sortedProducts = [...selectedProducts.entries()].sort((a, b) => {
            const numA = parseInt(a[0].match(/^\d+/)?.[0] || 0);
            const numB = parseInt(b[0].match(/^\d+/)?.[0] || 0);
            return numA - numB;
        });

        sortedProducts.forEach(([name, data]) => {
            text += `*${name}* ---- ${data.spray} ${data.isComplex ? pluralize(data.spray, 'kit', 'kits') : pluralize(data.spray, 'frasco', 'frascos')}\n`;
            if (data.isComplex) {
                text += `  • Duração: ${data.days} dias\n`;
                if (data.days === "7") {
                    text += `  • Care 1: Borrifar ${data.care1} ${pluralize(data.care1, 'vez', 'vezes')}, Via Oral, 4x ao dia na 1 semana\n`;
                    text += `  • Care 2: Borrifar ${data.care2} ${pluralize(data.care2, 'vez', 'vezes')}, Via Oral, 4x ao dia na 2 semana\n`;
                    text += `  • Care 3: Borrifar ${data.care3} ${pluralize(data.care3, 'vez', 'vezes')}, Via Oral, 4x ao dia na 3 semana\n`;
                    text += `  • Care 4: Borrifar ${data.care4} ${pluralize(data.care4, 'vez', 'vezes')}, Via Oral, 4x ao dia na 4 semana\n`;
                } else {
                    text += `  • Care 1: Borrifar ${data.care1} ${pluralize(data.care1, 'vez', 'vezes')}, Via Oral, 4x ao dia, do dia 1–5\n`;
                    text += `  • Care 2: Borrifar ${data.care2} ${pluralize(data.care2, 'vez', 'vezes')}, Via Oral, 4x ao dia, do dia 6–10\n`;
                    text += `  • Care 3: Borrifar ${data.care3} ${pluralize(data.care3, 'vez', 'vezes')}, Via Oral, 4x ao dia, do dia 11–15\n`;
                    text += `  • Care 4: Borrifar ${data.care4} ${pluralize(data.care4, 'vez', 'vezes')}, Via Oral, 4x ao dia, do dia 16–20\n`;
                }
            } else {
                text += `  • Borrifar ${data.dosage} ${pluralize(data.dosage, 'vez', 'vezes')}, Via Oral, 4 vezes ao dia, por 7 dias\n`;
            }
            text += `  Compre aqui: ${productLinks[name] || 'Site Oficial'}\n\n`;
        });

        text += `\n`; // Empty area as requested

        const encodedText = encodeURIComponent(text);
        const phoneDigits = (patientData.ddi + patientData.phone).replace(/\D/g, '');
        const waUrl = `https://wa.me/${phoneDigits}?text=${encodedText}`;
        window.open(waUrl, '_blank');
    };

    // Global Tab Loop Logic (Dashboard)
    // Ordem: Busca -> Paciente -> "X" (Remover) -> Gerar Receituário -> Copiar Última -> Limpar Tudo -> (volta para busca)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            // Only handle if no modal is active
            const anyModalActive = document.querySelector('.modal-overlay.active');
            if (anyModalActive) return;

            e.preventDefault(); // Sempre prevenir comportamento padrão do Tab

            const removeButtons = Array.from(sidebarList.querySelectorAll('.remove-btn'));
            // Ordem: Busca(1) -> Paciente(2) -> Remove(3) -> Gerar(4) -> Copiar(5) -> Limpar(6)
            const mainCycle = [searchInput, patientTrigger, ...removeButtons, btnSubmit, btnCopy, btnReset];

            // Filter out missing or disabled buttons (to prevent stuck focus)
            const focusableItems = mainCycle.filter(item => item && !item.disabled && item.offsetParent !== null);
            if (focusableItems.length === 0) return;

            const currentIndex = focusableItems.indexOf(document.activeElement);

            let nextIndex;
            if (e.shiftKey) { // Backwards
                nextIndex = currentIndex <= 0 ? focusableItems.length - 1 : currentIndex - 1;
            } else { // Forwards
                nextIndex = currentIndex >= focusableItems.length - 1 ? 0 : currentIndex + 1;
            }

            focusableItems[nextIndex].focus();
        }
    });

    btnCopy.onclick = () => {
        // Placeholder for future logic
        console.log('Copiar Última clicked');
    };

    renderProducts();
});
