module.exports = {
  getAmountInputElement: (wrapper) => {
    return wrapper.find('.mt-number-input-container input')
  },

  getDatePickerElement: (wrapper) => {
    return wrapper.find('.mt-datepicker')
  },

  getAccountSelectorElement: (wrapper) => {
    return wrapper.find('.mt-account-select')
  },

  getAccountOptions: (selector) => {
    return selector.find('.mt-account-option')
  },

  getCategorySelectorElement: (wrapper) => {
    return wrapper.find('.mt-category-select')
  },

  getExpenseTypeRadioElement: (wrapper) => {
    return wrapper.find('.mt-transaction-type #expense-type')
  },

  getIncomeTypeRadioElement: (wrapper) => {
    return wrapper.find('.mt-transaction-type #income-type')
  }
}
