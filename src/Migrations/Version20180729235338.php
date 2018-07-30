<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180729235338 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE positioning (id INT AUTO_INCREMENT NOT NULL, company_id INT DEFAULT NULL, product_service LONGTEXT NOT NULL, client_market LONGTEXT NOT NULL, concurrent LONGTEXT DEFAULT NULL, principe_objectif LONGTEXT NOT NULL, strategie LONGTEXT DEFAULT NULL, besoin LONGTEXT NOT NULL, program_help LONGTEXT NOT NULL, INDEX IDX_2B2A7019979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE positioning ADD CONSTRAINT FK_2B2A7019979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE positioning');
    }
}
