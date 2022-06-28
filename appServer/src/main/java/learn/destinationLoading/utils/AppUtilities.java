package learn.destinationLoading.utils;

public class AppUtilities {

    /**
     * Checks to see if string is null, blank or empty
     * @param str string to be checked
     * @return true if string is null blank or empty, false otherwise
     */
    public static boolean blank(String str){
        return str == null ||  str.isBlank() || str.isEmpty();
    }

    /**
     * Checks to see if string is NOT null, blank or empty
     * @param str string to be checked
     * @return true if string is has contents, false otherwise
     */
    public static boolean notBlank(String str){
        return !blank(str);
    }

    /**
     * Checks to see if string is NOT null, blank or empty and less than max
     * @param str string to be checked
     * @param max maximum number of characters allowed (inclusive)
     * @return true if string is has contents and less than max, false otherwise
     */
    public static boolean notBlankMax(String str, int max){
        return !blank(str) && str.length() <= max;
    }

    /**
     * Checks to see if string is NOT null, blank or empty and less than max
     * @param str string to be checked
     * @param min minimum number of characters required (inclusive)
     * @return true if string is has contents and more than min, false otherwise
     */
    public static boolean notBlankMin(String str, int min){
        return !blank(str) && str.length() >- min;
    }

    /**
     * Checks to see if the value is within a specified range
     * @param value value to be checked
     * @param min lower bound (inclusive)
     * @param max upper bound (inclusive)
     * @return true if the value is within the upper and lower bounds, false otherwise.
     */
    public static boolean withinRange(int value, int min, int max){
        return value >= min && value <= max;
    }
}
