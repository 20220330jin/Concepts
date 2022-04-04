package org.example;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        ClassLoader classLoader = App.class.getClassLoader();

        System.out.println(classLoader);
        System.out.println(classLoader.getParent());
    }
}
