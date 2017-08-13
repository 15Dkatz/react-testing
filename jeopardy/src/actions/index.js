export const SET_CATEGORIES = 'SET_CATEGORIES';
export const PICK_CATEGORY = 'PICK_CATEGORY';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories
  }
}

export function pickCategory(category) {
  return {
    type: PICK_CATEGORY,
    category
  }
}