import { DescriptionType } from '../types';

type descriptionSplitFn = (description: string) => DescriptionType;

export const splitDescription: descriptionSplitFn = function (description) {
   const splitByResponsopilities = description?.split('Responsopilities:')
   const splitByBenefits = splitByResponsopilities && splitByResponsopilities[1]?.split('Compensation & Benefits:')
   const benefits = splitByBenefits && splitByBenefits[1]?.split('.')?.slice(0, -1)
   const descriptionObject = {
    desc: splitByResponsopilities ? splitByResponsopilities[0] : description,
    responsopilities: splitByBenefits ? splitByBenefits[0] : '',
    benefits: benefits || []
   }
   return descriptionObject;
}
