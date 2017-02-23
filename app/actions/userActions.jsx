export const SAVE_PROFILE_DATA = "SAVE_PROFILE_DATA"

export function saveProfileData(username,email,profilePic)
{
  return { type: SAVE_PROFILE_DATA, username,email,profilePic}
}
