import ConfirmationService from '../services/confirmation';

export default (context, inject) => {
  inject('ConfirmationService', ConfirmationService)

  context.$ConfirmationService = ConfirmationService
}
