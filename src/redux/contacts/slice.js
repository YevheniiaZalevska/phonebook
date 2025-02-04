import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный экшен для удаления контакта
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/contacts/${contactId}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    deletingIds: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteContact.pending, (state, action) => {
        state.deletingIds.push(action.meta.arg);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
        state.deletingIds = state.deletingIds.filter((id) => id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.deletingIds = state.deletingIds.filter((id) => id !== action.meta.arg);
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
