<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class SignUpControllerTest extends TestCase
{
    /**
     * @method \Illuminate\Testing\TestResponse post(string $uri, array $data = [], array $headers = [])
     */
    public function test_example()
    {
        $userData = [
            'name' => "aa",
            'email' => "aa",
            'password' => 'password',
            'confirmPassword' => 'password',
        ];

        // Act
        // $response = $this->post(route('signup'), $userData);

        // Assert
        // $response->assertStatus(302);
        // or other expected status
    }
}
