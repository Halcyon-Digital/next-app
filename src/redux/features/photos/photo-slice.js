import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPhotos } from './photo-service';

const initialState = {
  photos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get user photos
export const getPhotos = createAsyncThunk(
  'photo/getAllPhotos',
  async (_, thunkAPI) => {
    try {
      return await getAllPhotos();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.photos = action.payload;
      })
      .addCase(getPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = photoSlice.actions;
export default photoSlice.reducer;
