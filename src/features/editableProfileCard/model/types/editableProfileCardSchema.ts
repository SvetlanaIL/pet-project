import { Profile } from 'entities/Profile/model/types/profile';
import { ValidateProfileError } from 'features/editableProfileCard/model/consts/consts';

export interface ProfileSchema {
    data?: Profile;
    formData?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
